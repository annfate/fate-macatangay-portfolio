"use client";

import { useTheme } from "../context/ThemeContext";

export default function Hero() {
	const { darkMode } = useTheme();

	return (
		<section
			id="home"
			className={`min-h-screen flex items-center px-6 md:px-20 md:pt-24  transition-colors duration-300 ${
				darkMode ? "bg-[#0c080d]" : "bg-white"
			}`}
		>
			<div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-10">
				<div className="md:w-2/3 text-center md:text-left">
					<h1
						className={`text-5xl md:text-7xl font-bold leading-tight transition-colors duration-300 ${
							darkMode ? "text-white" : "text-gray-900"
						}`}
					>
						Hi, I{"'"}m Fate 👋
					</h1>

					<h2
						className={`mt-4 text-xl md:text-2xl transition-colors duration-300 ${
							darkMode ? "text-gray-300" : "text-gray-600"
						}`}
					>
						Frontend Developer
					</h2>

					<p
						className={`mt-6 text-base md:text-lg leading-relaxed transition-colors duration-300 ${
							darkMode ? "text-gray-400" : "text-gray-500"
						}`}
					>
						I build clean, responsive, and user-friendly web applications using
						modern technologies like Next.js and Tailwind CSS. I focus on
						design, performance, and user experience.
					</p>

					<div className="mt-8 flex gap-4 justify-center md:justify-start">
						<a
							href="#projects"
							className="px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition"
						>
							View Projects
						</a>

						<a
							href="#contact"
							className={`px-6 py-3 rounded-lg border transition ${
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
						className={`w-64 h-64 md:w-80 md:h-80 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
							darkMode
								? "bg-gray-800 text-gray-400"
								: "bg-gray-200 text-gray-500"
						}`}
					>
						Your Image Here
					</div>
				</div>
			</div>
		</section>
	);
}
