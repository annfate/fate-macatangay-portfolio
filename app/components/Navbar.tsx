"use client";

import { useState } from "react";
import { Home, User, FolderOpen, Mail, Moon, Sun, Brain } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
	const [active, setActive] = useState("home");
	const { darkMode, toggleDarkMode } = useTheme();

	const links = [
		{ name: "home", label: "Home", icon: Home },
		{ name: "about", label: "About", icon: User },
		{ name: "projects", label: "Projects", icon: FolderOpen },
		{ name: "skills", label: "Skills", icon: Brain },
		{ name: "contact", label: "Contact", icon: Mail },
	];

	return (
		<div
			className={
				darkMode ? "bg-[#0c080d] min-h-screen" : "bg-[#dddddd] min-h-screen"
			}
		>
			<div className="flex justify-center pt-6">
				<nav
					className={
						darkMode
							? "bg-[#dddddd] text-black px-3 md:px-4 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full shadow-md"
							: "bg-[#0c080d] text-white px-3 md:px-4 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full shadow-md"
					}
				>
					<div className="flex items-center justify-between gap-4 sm:gap-10">
						{/* Brand */}
						<h1 className="font-bold text-sm md:text-base lg:text-lg">FATE</h1>

						{/* Links */}
						<ul className="flex items-center gap-1 md:gap-2 lg:gap-4">
							{links.map((link) => {
								const Icon = link.icon;
								const isActive = active === link.name;

								return (
									<li key={link.name}>
										<button
											onClick={() => setActive(link.name)}
											className={
												isActive
													? "bg-white text-black p-1.5 md:p-2 lg:px-3 lg:py-1 rounded-full flex items-center gap-0 sm:gap-2"
													: "p-1.5 md:p-2 lg:px-3 lg:py-1 rounded-full flex items-center gap-0 sm:gap-2 hover:opacity-70"
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

						{/* Toggle */}
						<button
							onClick={toggleDarkMode}
							className="p-2 bg-white text-black rounded-full"
						>
							{darkMode ? <Sun size={18} /> : <Moon size={18} />}
						</button>
					</div>
				</nav>
			</div>
		</div>
	);
}
