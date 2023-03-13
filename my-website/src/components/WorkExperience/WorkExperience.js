import "./WorkExperience.css"
import {WorkExperienceList} from "./WorkExperienceList"
import {projects} from "../Projects/ProjectList";
import {React} from "../Technologies";

function WorkExperience() {
    return (
        <section id="workexperience" className="text-white bg-base-100">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold lg:text-5xl">Places I've worked.</h2>
                </div>
                <div className="mt-8">
                    <div
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition bg-neutral hover:border-primary-500/10 hover:shadow-gray-500/10">
                        <ol className=" relative border-l border-gray-200 dark:border-gray-700">

                            {WorkExperienceList.map((experience) =>
                                <li className="mb-10 ml-6 grid grid-cols-12">

                                <span
                                    className=" col-span-12 absolute flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full -left-3 ring-8 ring-base-100 ">
                                    <svg aria-hidden="true" className="w-3 h-3 text-black" fill="currentColor"
                                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                              clip-rule="evenodd">
                                        </path>
                                    </svg>
                                </span>

                                    <h3 className="col-span-12 flex items-center mb-1 text-2xl font-semibold text-info">
                                        {experience.position}
                                        {experience.endDate === "Current" ? (
                                            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                                                Current
                                            </span>) : null}

                                    </h3>

                                    <h3 className="col-span-12 flex items-center mb-1 text-xl font-semibold text-info">
                                        {experience.companyName}
                                    </h3>

                                    <time
                                        className=" col-span-12 block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                        {experience.startDate} - {experience.endDate}
                                    </time>

                                    <p className=" col-span-12 mb-4 text-lg text-justify font-normal text-gray-500 dark:text-gray-400">
                                        {experience.responsibilities}
                                    </p>

                                    <div className="col-span-12 col-start-1">
                                        {experience.skillsUsed.map((skill) =>
                                            <span
                                                className="m-2 inline-flex border border-black items-center justify-center rounded-full bg-accent px-2.5 py-0.5 text-info hover:border-white">
                                                    <img className="m-1 h-4" src={skill.iconLink}/>
                                                    <p className="whitespace-nowrap text-base">{skill.name}</p>
                                                </span>
                                        )}
                                    </div>
                                    <div className="col-span-12">
                                        <br/>
                                    </div>

                                    <div className="col-span-1">
                                        <a className="inline-block rounded-full border border-indigo-600 p-3 text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                                           href={experience.link} target="_blank">
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                      d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="divider col-span-12"></div>
                                </li>
                            )}
                        </ol>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default WorkExperience;