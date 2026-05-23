"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";

// Define the structure for project images
interface ProjectImages {
	project1: string[];
	project2: string[];
	project3: string[];
}

// Project descriptions
const projectDescriptions = {
	project1:
		"A self-hosted Web Application that allows storage operations such as uploading, sharing, viewing, and organization creation, with real-time features for Antipolo Campus.",
	project2:
		"A fully responsive dog adoption website that allows users to browse various dog breeds, view detailed information about each dog, and easily complete the adoption process to give a furry friend a loving home",
	project3:
		"Breakfast at Antonio's is a streamlined ordering system designed to help customers effortlessly browse menu items, customize their selections, and place food orders directly from the restaurant.",
};

// Sample image data for each project
const projectImagesData: ProjectImages = {
	project1: [
		"/projects/1NEBULA/1.1.jpg",
		"/projects/1NEBULA/1.2.jpg",
		"/projects/1NEBULA/1.3.jpg",
		"/projects/1NEBULA/1.4.jpg",
	],
	project2: [
		"/projects/2Doggie/2.1.jpg",
		"/projects/2Doggie/2.2.jpg",
		"/projects/2Doggie/2.3.jpg",
		"/projects/2Doggie/2.4.jpg",
	],
	project3: [
		"/projects/3Software/3.1.png",
		"/projects/3Software/3.2.png",
		"/projects/3Software/3.3.png",
		"/projects/3Software/3.4.png",
	],
};

export default function Projects() {
	const { darkMode } = useTheme();
	const [activeProject, setActiveProject] =
		useState<keyof ProjectImages>("project1");
	const [modalOpen, setModalOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// Get current project images and description
	const currentImages = projectImagesData[activeProject];
	const currentDescription = projectDescriptions[activeProject];

	// Navigate to previous image
	const prevImage = useCallback(() => {
		setCurrentImageIndex((prev) =>
			prev === 0 ? currentImages.length - 1 : prev - 1,
		);
	}, [currentImages.length]);

	// Navigate to next image
	const nextImage = useCallback(() => {
		setCurrentImageIndex((prev) =>
			prev === currentImages.length - 1 ? 0 : prev + 1,
		);
	}, [currentImages.length]);

	// Close modal
	const closeModal = useCallback(() => {
		setModalOpen(false);
	}, []);

	// Open modal with selected image
	const openModal = (index: number) => {
		setCurrentImageIndex(index);
		setModalOpen(true);
	};

	// Handle project click with transition effect
	const handleProjectClick = (project: keyof ProjectImages) => {
		if (project === activeProject) return;
		setActiveProject(project);
	};

	// Handle body scroll when modal opens/closes
	useEffect(() => {
		if (modalOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}

		// Cleanup function
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [modalOpen]);

	// Handle keyboard events
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (!modalOpen) return;
			if (e.key === "Escape") closeModal();
			if (e.key === "ArrowLeft") prevImage();
			if (e.key === "ArrowRight") nextImage();
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [modalOpen, closeModal, prevImage, nextImage]);

	return (
		<>
			<section
				id="projects"
				className={`min-h-screen flex flex-col justify-start px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20 transition-colors duration-300 ${
					darkMode ? "bg-[#0c080d]" : "bg-white"
				}`}
			>
				<div className="max-w-6xl w-full mx-auto">
					{/* Heading */}
					<h1
						className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center transition-colors duration-300 ${
							darkMode ? "text-white" : "text-gray-900"
						}`}
					>
						Projects
					</h1>

					{/* Button Group */}
					<div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10 px-2">
						{(["project1", "project2", "project3"] as const).map((project) => (
							<button
								key={project}
								onClick={() => handleProjectClick(project)}
								className={`
									px-3 sm:px-5 md:px-7 lg:px-8 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-full font-medium text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300 whitespace-nowrap
									${
										activeProject === project
											? darkMode
												? "bg-white text-black shadow-lg scale-105"
												: "bg-black text-white shadow-lg scale-105"
											: darkMode
												? "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105"
												: "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:scale-105"
									}
								`}
							>
								{project === "project1" && "Project 1"}
								{project === "project2" && "Project 2"}
								{project === "project3" && "Project 3"}
							</button>
						))}
					</div>

					{/* Project Description */}
					<div className="max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 text-center px-4 sm:px-6">
						<p
							className={`text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed transition-colors duration-300 ${
								darkMode ? "text-gray-300" : "text-gray-600"
							}`}
						>
							{currentDescription}
						</p>
					</div>

					{/* Image Grid with Transition - FIXED for mobile */}
					<div className="transition-all duration-500 ease-in-out">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 auto-rows-fr">
							{currentImages.map((imageUrl, index) => (
								<div
									key={`${activeProject}-${index}`}
									className="relative group overflow-hidden rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl animate-fadeIn cursor-pointer"
									style={{
										animation: `fadeIn 0.5s ease-in-out ${index * 0.1}s both`,
									}}
									onClick={() => openModal(index)}
								>
									<div className="relative w-full pt-[56.25%]">
										{/* 16:9 aspect ratio wrapper */}
										<Image
											src={imageUrl}
											alt={`${activeProject} image ${index + 1}`}
											fill
											className="object-cover transition-transform duration-700 group-hover:scale-110"
											sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
										/>
									</div>
									{/* Overlay on hover */}
									<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
										<span className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium px-2 text-center">
											Click to expand
										</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Add keyframe animation styles */}
				<style jsx>{`
					@keyframes fadeIn {
						from {
							opacity: 0;
							transform: translateY(20px);
						}
						to {
							opacity: 1;
							transform: translateY(0);
						}
					}
					.animate-fadeIn {
						animation: fadeIn 0.5s ease-in-out forwards;
					}
				`}</style>
			</section>

			{/* Full Screen Modal */}
			{modalOpen && (
				<div
					className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center"
					onClick={closeModal}
				>
					{/* Exit Button */}
					<button
						onClick={closeModal}
						className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all duration-300 hover:scale-110"
						aria-label="Close fullscreen view"
					>
						<svg
							className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>

					{/* Previous Button */}
					<button
						onClick={(e) => {
							e.stopPropagation();
							prevImage();
						}}
						className="absolute left-2 sm:left-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 group"
						aria-label="Previous image"
					>
						<svg
							className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</button>

					{/* Next Button */}
					<button
						onClick={(e) => {
							e.stopPropagation();
							nextImage();
						}}
						className="absolute right-2 sm:right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110 group"
						aria-label="Next image"
					>
						<svg
							className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>

					{/* Image Counter - Changed to Dots */}
					<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex gap-1.5 sm:gap-2">
						{currentImages.map((_, idx) => (
							<button
								key={idx}
								onClick={(e) => {
									e.stopPropagation();
									setCurrentImageIndex(idx);
								}}
								className={`transition-all duration-300 rounded-full ${
									idx === currentImageIndex
										? "bg-white w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3"
										: "bg-white/40 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 hover:bg-white/70"
								}`}
								aria-label={`Go to image ${idx + 1}`}
							/>
						))}
					</div>

					{/* Modal Content */}
					<div
						className="relative w-full h-full flex items-center justify-center p-4 md:p-8"
						onClick={(e) => e.stopPropagation()}
					>
						<div className="relative w-full h-full max-w-7xl max-h-[90vh]">
							<Image
								src={currentImages[currentImageIndex]}
								alt={`Full screen ${activeProject} image ${currentImageIndex + 1}`}
								fill
								className="object-contain"
								sizes="100vw"
								priority
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
