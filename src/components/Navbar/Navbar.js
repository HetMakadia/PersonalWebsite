import { Link } from 'react-scroll'
import React, { useEffect, useState } from "react";

const navItems = [
    { to: "workexperience", label: "Work Experience" },
    { to: "projects", label: "Projects" },
    { to: "education", label: "Education" },
    { to: "skills", label: "Skills" },
]

function NavLink({ to, label, className = "" }) {
    return (
        <Link
            className={`relative text-gray-400 transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full ${className}`}
            activeClass="text-white after:w-full"
            to={to}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
        >
            {label}
        </Link>
    )
}

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className={`navbar select-none transition-all duration-300 ${scrolled ? "bg-base-100/80 backdrop-blur-md shadow-lg shadow-black/20 py-2" : "bg-transparent py-4"}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100/95 backdrop-blur-md rounded-box w-52 font-bold">
                        {navItems.map((item) => (
                            <li key={item.to}><a className="text-gray-400 hover:text-white"><NavLink {...item} /></a></li>
                        ))}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl font-bold transition-transform hover:scale-105"><Link activeClass="text-white" to="main" spy={true} smooth={true} offset={-70} duration={500}>Het Makadia</Link></a>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold gap-2">
                    {navItems.map((item) => (
                        <li key={item.to}><a className="text-gray-400 hover:text-white"><NavLink {...item} /></a></li>
                    ))}
                </ul>
            </div>

            <div className="navbar-end">
            </div>
        </nav>
    )
}

export default Navbar;
