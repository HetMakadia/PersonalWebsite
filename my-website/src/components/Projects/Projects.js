import "./Projects.css"
import rooster from "./rooster.png"
import {projects} from "./ProjectList";
import {React} from "../Technologies";

function Projects() {
    return (
        <div>
            <section className="text-white bg-base-100">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-3xl font-bold lg:text-5xl">Things I've learned and built.</h2>
                    </div>
                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) =>
                            <a className="block grid grid-cols-12 rounded-xl border border-gray-800 p-8 shadow-xl transition bg-neutral hover:border-white hover:shadow-gray-500/10">
                                <img className="col-span-12 h-12" src={project.logo}/>
                                <h2 className="col-span-12 mt-4 text-2xl font-bold text-white">{project.name}</h2>
                                <p className="col-span-12 mt-1 text-justify text-base text-gray-300">
                                    {project.description}
                                </p>
                                <br/>
                                <div className="col-span-8 col-start-1">
                                    {project.techUsed.map((tech) =>
                                        <span
                                            className="m-2 inline-flex items-center justify-center rounded-full bg-accent px-2.5 py-0.5 text-info">
                                                <img className="m-1 h-3" src={tech.iconLink}/>
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
                                    <a className="inline-block rounded-full border border-indigo-600 p-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                                       href={project.github} target="_blank">
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                                        </svg>
                                    </a>
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
                                                        className="m-2 inline-flex items-center justify-center rounded-full bg-accent px-2.5 py-0.5 text-info">
                                    <img className="m-1 h-3" src={tech.iconLink}/>
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
                                            <a className="inline-block rounded-full border border-indigo-600 p-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                                               href={project.github2} target="_blank">
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                     viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          stroke-width="2"
                                                          d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                                                </svg>
                                            </a>
                                        </div>)}
                                    </div> : null
                                }
                            </a>
                        )}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Projects;