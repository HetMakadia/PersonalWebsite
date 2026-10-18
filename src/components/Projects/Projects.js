import {projects} from "./ProjectList";
import {motion} from "framer-motion";
import {Reveal, RevealGroup, RevealItem} from "../common/Reveal";

function Projects() {
    return (
        <section id="projects" className="text-white bg-base-100 select-none">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <Reveal className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold lg:text-5xl">Things I've learned and built.</h2>
                </Reveal>
                <RevealGroup className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) =>
                        <RevealItem
                            key={project.name}
                            as="a"
                            whileHover={{ y: -6 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="block grid grid-cols-12 rounded-xl border border-gray-800 p-8 shadow-xl transition-colors duration-300 bg-neutral hover:border-white hover:shadow-2xl hover:shadow-gray-500/20"
                            href={project.github !== "Private" && project.github !== "Console" ? project.github : undefined}
                            target={project.github !== "Private" && project.github !== "Console" ? "_blank" : undefined}
                            rel="noreferrer"
                        >
                            <img className="col-span-12 h-12" src={project.logo} alt={project.name}/>
                            <h2 className="col-span-12 mt-4 text-2xl font-bold text-white">{project.name}</h2>
                            <p className="col-span-12 mt-1 text-justify text-base text-gray-300">
                                {project.description}
                            </p>
                            <br/>
                            <div className="col-span-8 col-start-1">
                                {project.techUsed.map((tech) =>
                                    <span
                                        key={tech.name}
                                        className="m-2 inline-flex items-center justify-center rounded-full bg-accent px-2.5 py-0.5 text-info transition-transform hover:scale-105">
                                                <img className="m-1 h-3" src={tech.iconLink} alt={tech.name}/>
                                                <p className="whitespace-nowrap text-sm">{tech.name}</p>
                                            </span>
                                )}
                            </div>
                            {(project.github === "Private") || (project.github === "Console") ? (
                                <div className="col-span-2 col-start-10">
                                    <button className="btn btn-primary btn-outline inline-block p-3" disabled>
                                        {project.github}
                                    </button>
                                </div>) : (<div className="col-span-1 col-start-11">
                                <motion.span
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-block rounded-full border border-indigo-600 p-3 text-indigo-600 transition-colors hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                                    </svg>
                                </motion.span>
                            </div>)}
                            {project.name2 ?
                                <div className="col-span-12 grid grid-cols-12">
                                    <br/>
                                    <h2 className="col-span-12 mt-4 text-2xl font-bold text-white">{project.name2}</h2>
                                    <p className="col-span-12 mt-1 text-justify text-base text-gray-300">
                                        {project.description2}
                                    </p>
                                    <br/>

                                    <div className="col-span-8 col-start-1">
                                        {project.techUsed2.map((tech) =>
                                                <span
                                                    key={tech.name}
                                                    className="m-2 inline-flex items-center justify-center rounded-full bg-accent px-2.5 py-0.5 text-info transition-transform hover:scale-105">
                                    <img className="m-1 h-3" src={tech.iconLink} alt={tech.name}/>
                                    <p className="whitespace-nowrap text-sm">{tech.name}</p>
                                    </span>
                                        )}
                                    </div>
                                    {(project.github2 === "Private") || (project.github2 === "Console") ? (
                                        <div className="col-span-2 col-start-10">
                                            <button className="btn btn-primary btn-outline inline-block p-3"
                                                    disabled>
                                                {project.github2}
                                            </button>
                                        </div>) : (<div className="col-span-1 col-start-11">
                                        <motion.span
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="inline-block rounded-full border border-indigo-600 p-3 text-indigo-600 transition-colors hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      strokeWidth="2"
                                                      d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                                            </svg>
                                        </motion.span>
                                    </div>)}
                                </div> : null
                            }
                        </RevealItem>
                    )}
                </RevealGroup>
            </div>
        </section>
    )
}

export default Projects;
