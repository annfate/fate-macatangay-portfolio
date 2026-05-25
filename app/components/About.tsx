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
				"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
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
			className={`min-h-screen flex flex-col justify-center px-6 md:px-12 py-16 sm:py-20 transition-colors duration-300 ${
				darkMode ? "bg-[#0c080d]" : "bg-white"
			}`}
		>
			{/* About Section */}
			<div className="max-w-4xl w-full mx-auto text-center mb-12 sm:mb-16 md:mb-20">
				<h1
					className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 transition-colors duration-300 ${
						darkMode ? "text-white" : "text-gray-900"
					}`}
				>
					About Me
				</h1>
				<p
					className={`text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed transition-colors duration-300 px-4 sm:px-6 md:px-0 ${
						darkMode ? "text-gray-300" : "text-gray-600"
					}`}
				>
					I specialize in crafting responsive and user-friendly web experiences
					as a UI/UX designer using modern technologies like Next.js, React, and
					Material-UI. I have a strong foundation in HTML, CSS, JavaScript, and
					TypeScript, along with experience using Bootstrap and Tailwind CSS to
					build sleek, functional interfaces. I leverage tools like VS Code,
					GitHub, and Canva to streamline development and design workflows. I am
					passionate about clean code, intuitive design, and creating seamless
					digital experiences that users truly love.
				</p>
			</div>

			{/* Skills Section */}
			<div className="max-w-5xl w-full mx-auto px-4 sm:px-6">
				<h2
					className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center transition-colors duration-300 ${
						darkMode ? "text-white" : "text-gray-900"
					}`}
				>
					My Skills
				</h2>

				<div className="space-y-6 sm:space-y-8 md:space-y-10">
					{skillsData.map((skill, idx) => (
						<div
							key={idx}
							className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12"
						>
							<div className="w-full sm:w-2/5 text-center sm:text-left">
								<h3
									className={`text-base sm:text-lg md:text-xl lg:text-2xl font-semibold transition-colors duration-300 ${
										darkMode ? "text-gray-200" : "text-gray-800"
									}`}
								>
									{skill.category}
								</h3>
							</div>

							<div className="w-full sm:w-3/5 flex gap-4 sm:gap-5 md:gap-6 items-center justify-center sm:justify-start flex-wrap">
								{skill.icons.map((icon, iconIdx) => (
									<div key={iconIdx}>
										<Image
											src={icon}
											alt={skill.category}
											width={48}
											height={48}
											className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 ${
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
