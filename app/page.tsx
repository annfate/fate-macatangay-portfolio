<<<<<<< Updated upstream
export default function Home() {
	return <h1 className="text-3xl font-bold underline">Hello World!</h1>;
=======
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
>>>>>>> Stashed changes
}
