"use client";

import Image from "next/image";
import { useTheme } from "../context/ThemeContext";

export default function AboutSkills() {
	const { darkMode } = useTheme();

	const skillsData = [
		{
			category: "Programming Languages",
			icons: [
				"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
				"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
			],
		},
		{
			category: "Frameworks & Libraries",
			icons: [
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
				"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
				"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materializecss/materializecss-original.svg",
			],
		},
		{
			category: "Design & Tools",
			icons: [
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
				"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
				"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
			],
		},
	];

	return (
		<section
			id="about"
			className={`min-h-screen flex flex-col justify-center px-6 md:px-12 py-20 transition-colors duration-300 ${
				darkMode ? "bg-[#0c080d]" : "bg-white"
			}`}
		>
			{/* About Section */}
			<div className="max-w-4xl w-full mx-auto text-center mb-20">
				<h1
					className={`text-5xl md:text-7xl font-bold mb-8 transition-colors duration-300 ${
						darkMode ? "text-white" : "text-gray-900"
					}`}
				>
					About Me
				</h1>
				<p
					className={`text-base md:text-lg leading-relaxed transition-colors duration-300 ${
						darkMode ? "text-gray-300" : "text-gray-600"
					}`}
				>
					I{"'"}m a passionate frontend developer with a love for creating
					beautiful and functional web experiences. With expertise in modern
					technologies like Next.js, React, and Tailwind CSS, I focus on
					building responsive, performant, and user-friendly applications. I
					believe in writing clean code and continuous learning to stay updated
					with the latest industry trends.
				</p>
			</div>

			{/* Skills Section */}
			<div className="max-w-4xl w-full mx-auto">
				<h2
					className={`text-4xl md:text-5xl font-bold mb-12 text-center transition-colors duration-300 ${
						darkMode ? "text-white" : "text-gray-900"
					}`}
				>
					My Skills
				</h2>

				<div className="space-y-8">
					{skillsData.map((skill, idx) => (
						<div
							key={idx}
							className="flex items-center gap-12 justify-center"
						>
							<div className="w-2/5 text-left">
								<h3
									className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
										darkMode ? "text-gray-200" : "text-gray-800"
									}`}
								>
									{skill.category}
								</h3>
							</div>

							<div className="w-3/5 flex gap-6 items-center flex-wrap">
								{skill.icons.map((icon, iconIdx) => (
									<div
										key={iconIdx}
										className="transform transition-all duration-300 hover:scale-110 hover:rotate-3"
									>
										<Image
											src={icon}
											alt=""
											width={48}
											height={48}
											className={`w-10 h-10 md:w-12 md:h-12 ${
												darkMode &&
												(icon.includes("nextjs") || icon.includes("github"))
													? "invert brightness-200"
													: ""
											}`}
										/>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
