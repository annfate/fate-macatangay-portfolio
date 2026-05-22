"use client";

import { useTheme } from "../context/ThemeContext";

export default function Footer() {
	const { darkMode } = useTheme();
	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{
			name: "LinkedIn",
			url: "https://linkedin.com/in/yourusername",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.222 0 22.225 0z" />
				</svg>
			),
		},
		{
			name: "GitHub",
			url: "https://github.com/yourusername",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
				</svg>
			),
		},
		{
			name: "Indeed",
			url: "https://indeed.com/r/yourusername",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					{/* Fixed Indeed icon - using a proper "i" letter icon */}
					<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h-2v-6h2v6zm-1-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm8 7h-2v-4c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v-6h2v1.03c.45-.63 1.17-1.03 2-1.03 1.66 0 3 1.34 3 3v3z" />
				</svg>
			),
		},
		{
			name: "Gmail",
			url: "mailto:your.email@gmail.com",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
				</svg>
			),
		},
	];

	return (
		<footer
			id="contact"
			className={`w-full py-8 px-6 md:px-12 transition-colors duration-300 ${
				darkMode
					? "bg-[#0c080d] border-t border-gray-800"
					: "bg-white border-t border-gray-200"
			} pb-20 md:pb-8`}
		>
			<div className="max-w-6xl mx-auto">
				{/* Main Footer Content */}
				<div className="flex flex-col items-center gap-6">
					{/* Social Icons */}
					<div className="flex gap-4 md:gap-6">
						{socialLinks.map((social, idx) => (
							<a
								key={idx}
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								className={`group relative w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
									darkMode
										? "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
										: "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
								}`}
								aria-label={social.name}
							>
								<div className="flex items-center justify-center w-full h-full">
									{social.icon}
								</div>
								{/* Tooltip on hover */}
								<span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none bg-black text-white dark:bg-white dark:text-black">
									{social.name}
								</span>
							</a>
						))}
					</div>

					{/* Copyright */}
					<div className="text-center">
						<p
							className={`text-sm transition-colors duration-300 ${
								darkMode ? "text-gray-500" : "text-gray-500"
							}`}
						>
							© {currentYear} Fate Macatangay. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
