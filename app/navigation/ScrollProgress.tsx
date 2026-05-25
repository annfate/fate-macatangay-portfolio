"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const updateProgress = () => {
			const scrollTop = window.scrollY;
			const docHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const scrollPercent = (scrollTop / docHeight) * 100;
			setProgress(scrollPercent);
		};

		window.addEventListener("scroll", updateProgress);
		return () => window.removeEventListener("scroll", updateProgress);
	}, []);

	return (
		<div className="fixed top-0 left-0 w-full h-2 z-50">
			<div
				className="h-full transition-all duration-200 relative"
				style={{
					width: `${progress}%`,
					background: `linear-gradient(90deg, #7a6284, #52425c, #382b3f)`,
				}}
			>
				{/* Glow effect */}
				<div
					className="absolute top-0 right-0 w-20 h-full blur-md"
					style={{
						background: `linear-gradient(90deg, transparent, #7a6284)`,
					}}
				/>
			</div>
		</div>
	);
}
