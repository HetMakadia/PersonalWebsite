import { Link } from 'react-scroll'
import React, { useEffect, useState } from "react";
import { ThemeToggle } from "../common/ThemeToggle";

const navItems = [
    { to: "workexperience", label: "Work Experience" },
    { to: "projects", label: "Projects" },
    { to: "education", label: "Education" },
    { to: "skills", label: "Skills" },
]

function NavLink({ to, label, className = "" }) {
    return (
        <Link
            className={`relative text-base-content/50 transition-colors hover:text-base-content after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-base-content after:transition-all after:duration-300 hover:after:w-full ${className}`}
            activeClass="text-base-content after:w-full"
            to={to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => document.activeElement?.blur()}
        >
            {label}
        </Link>
    )
}

function Navbar({ mode = "site", onExitChat }) {
    const [scrolled, setScrolled] = useState(false);
    const isChatMode = mode === "chat";

    useEffect(() => {
        if (isChatMode) return;
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [isChatMode]);

    const elevated = isChatMode || scrolled;

    return (
        <nav className={`navbar select-none transition-all duration-300 ${elevated ? "bg-base-100/80 backdrop-blur-md shadow-lg shadow-black/20 py-2" : "bg-transparent py-4"}`}>
            <div className="navbar-start">
                {!isChatMode && (
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100/95 backdrop-blur-md rounded-box w-52 font-bold">
                            {navItems.map((item) => (
                                <li key={item.to}><a className="text-base-content/50 hover:text-base-content"><NavLink {...item} /></a></li>
                            ))}
                        </ul>
                    </div>
                )}
                {isChatMode ? (
                    <button type="button" onClick={onExitChat} className="btn btn-ghost btn-sm sm:btn-md px-2 sm:px-4 normal-case text-base sm:text-2xl font-bold transition-transform hover:scale-105">
                        Het Makadia
                    </button>
                ) : (
                    <a className="btn btn-ghost normal-case text-2xl font-bold transition-transform hover:scale-105"><Link activeClass="text-base-content" to="main" spy={true} smooth={true} offset={-70} duration={500}>Het Makadia</Link></a>
                )}
            </div>
            <div className="navbar-center flex">
                {isChatMode ? (
                    <button
                        type="button"
                        onClick={onExitChat}
                        className="inline-flex items-center gap-1 sm:gap-2 rounded-full border border-base-300 px-2.5 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-bold text-base-content/70 transition-colors hover:text-base-content hover:border-base-content/40"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="sm:hidden">Back</span>
                        <span className="hidden sm:inline">Back to basics</span>
                    </button>
                ) : (
                    <ul className="hidden lg:flex menu menu-horizontal px-1 font-bold gap-2">
                        {navItems.map((item) => (
                            <li key={item.to}><a className="text-base-content/50 hover:text-base-content"><NavLink {...item} /></a></li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="navbar-end">
                <ThemeToggle />
            </div>
        </nav>
    )
}

export default Navbar;
