import {WorkExperienceList} from "./WorkExperienceList"
import {motion} from "framer-motion";
import {Reveal, RevealGroup, RevealItem} from "../common/Reveal";

function WorkExperience() {
    return (
        <section id="workexperience" className="text-base-content select-none">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <Reveal className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold lg:text-5xl">Places I've worked.</h2>
                </Reveal>
                <div className="mt-8">
                    <Reveal
                        delay={0.1}
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition-all duration-300 bg-neutral hover:border-primary-500/10 hover:shadow-gray-500/10">
                        <RevealGroup as="ol" className="relative border-l border-gray-200 dark:border-gray-700">

                            {WorkExperienceList.map((experience, idx) =>
                                <RevealItem as="li" key={experience.companyName + idx} className="mb-10 ml-6 grid grid-cols-12">

                                <motion.span
                                    whileInView={{ scale: [0.5, 1.15, 1] }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className=" col-span-12 absolute flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full -left-3 ring-8 ring-base-100 ">
                                    <svg aria-hidden="true" className="w-3 h-3 text-black" fill="currentColor"
                                         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                              clipRule="evenodd">
                                        </path>
                                    </svg>
                                </motion.span>

                                    <h3 className="col-span-12 flex items-center mb-1 text-2xl font-semibold text-info">
                                        {experience.position}
                                        {experience.endDate === "Current" ? (
                                            <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3 animate-pulse">
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
                                            <motion.span
                                                key={skill.name}
                                                whileHover={{ scale: 1.08, y: -2 }}
                                                className="m-2 inline-flex border border-base-content/20 items-center justify-center rounded-full bg-accent px-2.5 py-0.5 text-info transition-colors hover:border-base-content">
                                                    <img className="m-1 h-4" src={skill.iconLink} alt={skill.name}/>
                                                    <p className="whitespace-nowrap text-base">{skill.name}</p>
                                                </motion.span>
                                        )}
                                    </div>
                                    <div className="col-span-12">
                                        <br/>
                                    </div>

                                    <div className="col-span-1">
                                        <motion.a
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="inline-block rounded-full border border-indigo-600 p-3 text-indigo-600 transition-colors hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
                                           href={experience.link} target="_blank" rel="noreferrer">
                                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                 viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                                            </svg>
                                        </motion.a>
                                    </div>
                                    <div className="divider col-span-12"></div>
                                </RevealItem>
                            )}
                        </RevealGroup>
                    </Reveal>
                </div>
            </div>
        </section>

    )
}

export default WorkExperience;
