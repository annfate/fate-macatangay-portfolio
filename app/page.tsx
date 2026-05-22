"use client";

import AboutSkills from "./components/About";
import Footer from "./components/Footer";

import Hero from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function Page() {
	return (
		<main>
			<Navbar />
			<Hero />
			<AboutSkills />
			<Projects />
			<Footer />
		</main>
	);
}
