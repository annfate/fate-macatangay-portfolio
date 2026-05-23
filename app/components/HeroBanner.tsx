"use client";

import Image from "next/image";
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
	const { darkMode } = useTheme();

	return (
		<section
			id="home"
			className={`min-h-screen flex items-center px-6 md:px-20 pt-0 sm:pt-16 md:pt-20 transition-colors duration-300 ${
				darkMode ? "bg-[#0c080d]" : "bg-white"
			}`}
		>
			<div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10">
				<div className="md:w-2/3 text-center md:text-left">
					<h1
						className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight transition-colors duration-300 ${
							darkMode ? "text-white" : "text-gray-900"
						}`}
					>
						Fate Macatangay
					</h1>

					<h2
						className={`mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl transition-colors duration-300 ${
							darkMode ? "text-gray-300" : "text-gray-600"
						}`}
					>
						Frontend Developer | UI/UX Designer
					</h2>

					<p
						className={`mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed transition-colors duration-300 max-w-2xl mx-auto md:mx-0 ${
							darkMode ? "text-gray-400" : "text-gray-500"
						}`}
					>
						I build clean, responsive, and user-friendly web applications using
						modern technologies like Next.js and Tailwind CSS, with a strong
						focus on design, performance, and user experience. Let us create
						something amazing together!
					</p>

					<div className="mt-6 sm:mt-8 flex gap-3 sm:gap-4 justify-center md:justify-start">
						<a
							href="#projects"
							className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition text-sm sm:text-base"
						>
							View Projects
						</a>

						<a
							href="#contact"
							className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg border transition text-sm sm:text-base ${
								darkMode
									? "border-gray-600 text-white hover:border-white"
									: "border-gray-300 text-gray-900 hover:border-black"
							}`}
						>
							Contact Me
						</a>
					</div>
				</div>

				<div className="md:w-1/3 flex justify-center">
					<div
						className={`w-48 sm:w-56 md:w-64 lg:w-72 h-auto rounded-2xl overflow-hidden transition-colors duration-300 ${
							darkMode ? "bg-gray-800" : "bg-gray-200"
						}`}
					>
						<Image
							src="/other/fate.jpg"
							alt="Fate"
							width={320}
							height={400}
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
