"use client";

import { createContext, useContext, useState } from "react";

type ThemeContextType = {
	darkMode: boolean;
	toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => setDarkMode((prev) => !prev);

	return (
		<ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</ThemeContext.Provider>
	);
}

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) throw new Error("useTheme must be used inside ThemeProvider");
	return context;
}
