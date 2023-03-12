import "./Navbar.css"

function Navbar() {
    return (
        <div className="navbar bg-neutral p-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Education</a></li>
                        <li><a>Work Experience</a></li>
                        <li><a>Projects</a></li>
                        <li><a>Skills</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Het Makadia</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Education</a></li>
                    <li><a>Work Experience</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Skills</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="group relative inline-flex items-center overflow-hidden rounded border border-current px-6 py-3 mr-3 text-gray-600 hover:text-white focus:outline-none focus:ring active:text-indigo-500" href="/download">
                    <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                        </svg>
                    </span>
                    <span className="text-sm text-white font-medium transition-all group-hover:mr-4">
                        Resume
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Navbar;