import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#1c1c1c" : "#f5f1ea");

    try {
        localStorage.setItem("theme", theme);
    } catch {
        // ignore
    }
}

export function ThemeToggle({ className = "" }) {
    const [theme, setTheme] = useState(
        () => document.documentElement.getAttribute("data-theme") || "dark"
    );

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    return (
        <button
            type="button"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            className={`flex h-9 w-9 items-center justify-center rounded-full border border-base-300 text-base-content transition-colors hover:border-base-content/40 ${className}`}
        >
            <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                    <motion.svg
                        key="sun"
                        xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                        transition={{ duration: 0.25 }}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.36 6.36l-.7-.7M6.34 6.34l-.7-.7m12.72 0l-.7.7M6.34 17.66l-.7.7M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </motion.svg>
                ) : (
                    <motion.svg
                        key="moon"
                        xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        initial={{ opacity: 0, rotate: 90, scale: 0.6 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: -90, scale: 0.6 }}
                        transition={{ duration: 0.25 }}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 1020.354 15.354z" />
                    </motion.svg>
                )}
            </AnimatePresence>
        </button>
    );
}
