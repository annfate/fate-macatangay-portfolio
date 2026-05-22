"use client";

import { useState } from "react";
import { Home, User, FolderOpen, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
	const [active, setActive] = useState("home");
	const { darkMode, toggleDarkMode } = useTheme();

	const links = [
		{ name: "home", label: "Home", icon: Home, sectionId: "home" },
		{ name: "about", label: "About", icon: User, sectionId: "about" },
		{
			name: "projects",
			label: "Projects",
			icon: FolderOpen,
			sectionId: "projects",
		},
		{ name: "contact", label: "Contact", icon: Mail, sectionId: "contact" },
	];

	const scrollToSection = (sectionId: string, linkName: string) => {
		setActive(linkName);
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<>
			<div className="flex justify-center pt-6 fixed bottom-0 left-0 right-0 z-50 md:top-0 sm:bottom-auto">
				<nav
					className={
						darkMode
							? "bg-[#dddddd] text-black px-3 md:px-4 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full shadow-md transition-colors duration-300"
							: "bg-[#0c080d] text-white px-3 md:px-4 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full shadow-md transition-colors duration-300"
					}
				>
					<div className="flex items-center justify-between gap-4 sm:gap-10">
						<button
							onClick={() => scrollToSection("home", "home")}
							className="font-bold text-sm md:text-base lg:text-lg"
						>
							FATE
						</button>

						<ul className="flex items-center gap-1 md:gap-2 lg:gap-4">
							{links.map((link) => {
								const Icon = link.icon;
								const isActive = active === link.name;

								return (
									<li key={link.name}>
										<button
											onClick={() => scrollToSection(link.sectionId, link.name)}
											className={
												isActive
													? "bg-white text-black p-1.5 md:p-2 lg:px-3 lg:py-1 rounded-full flex items-center gap-0 sm:gap-2 transition-all"
													: "p-1.5 md:p-2 lg:px-3 lg:py-1 rounded-full flex items-center gap-0 sm:gap-2 hover:opacity-70 transition-all"
											}
										>
											<Icon
												size={16}
												className="md:size-4.25 lg:size-4.5"
											/>
											<span className="hidden sm:inline">{link.label}</span>
										</button>
									</li>
								);
							})}
						</ul>

						<button
							onClick={toggleDarkMode}
							className="p-2 bg-white text-black rounded-full"
						>
							{darkMode ? <Sun size={18} /> : <Moon size={18} />}
						</button>
					</div>
				</nav>
			</div>
		</>
	);
}
