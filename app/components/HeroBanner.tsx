"use client";

export default function Hero() {
	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center bg-white px-6"
		>
			<div className="text-center max-w-2xl">
				{/* Title */}
				<h1 className="text-4xl md:text-6xl font-bold text-gray-900">
					Hi, I’m Fate 👋
				</h1>

				{/* Subtitle */}
				<p className="mt-4 text-lg md:text-xl text-gray-600">
					A Frontend Developer focused on building clean, responsive, and
					user-friendly web applications.
				</p>

				{/* Buttons */}
				<div className="mt-6 flex gap-4 justify-center">
					<a
						href="#projects"
						className="px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition"
					>
						View Projects
					</a>

					<a
						href="#contact"
						className="px-6 py-3 rounded-lg border border-gray-300 hover:border-black transition"
					>
						Contact Me
					</a>
				</div>
			</div>
		</section>
	);
}
