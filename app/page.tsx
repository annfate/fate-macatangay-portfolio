import Hero from "./components/HeroBanner";
import Navbar from "./components/Navbar";

export default function Page() {
	return (
		<main>
			<Navbar />
			<section id="home">
				<Hero />
			</section>
		</main>
	);
}
