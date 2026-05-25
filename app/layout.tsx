import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./context/ThemeContext";
import { Metadata } from "next";
import ScrollProgress from "./navigation/ScrollProgress";
const inter = Inter({
	subsets: ["latin"],
	weight: "400",
});

export const metadata: Metadata = {
	title: "Fate Portfolio",
	description: "My portfolio website",
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider>
					<ScrollProgress />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
