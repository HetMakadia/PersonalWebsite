import "./Education.css"
import csulbImg from "./education.jpg"
import {React} from "../Technologies";

function Education() {
    return (
        <section id="education" className="text-white bg-base-100 select-none">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold lg:text-5xl">My Education.</h2>
                </div>


                <div className="grid grid-cols-1 gap-8 mt-8">
                    <div className="content-center justify-self-center">
                        <div className="items-center justify-self-center text-info ">
                            <div className="card p-4 border border-neutral hover:border-white grid grid-cols-12 lg:card-side bg-neutral hover:bg-base-content/5 shadow-xl w-100">
                                <div className="self-center	col-span-12 lg:p-0 lg:col-span-4 justify-self-center	">
                                    <div className="avatar w-42 lg:w-60">
                                        <div className="w-60 rounded-full">
                                            <img className="h-40" src={csulbImg} alt="Album"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body self-center  col-span-12 p-4 lg:p-0 lg:col-span-8 ">
                                    <h2 className="card-title text-xl lg:text-3xl font-bold leading-normal">B.Sc. Computer Science</h2>
                                    <h2 className="card-title text-xl lg:text-2xl font-bold leading-normal">California State University Long Beach</h2>
                                    <div className="col-span-9 pr-10">
                                        <hr className="h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10"/>
                                    </div>
                                    <div className=" text-info edu-text">
                                        <p className="leading-normal"><span className="font-extrabold">• Term Honors: </span> <span className="italic text-gray-400">President's Honor List for Fall 2022 and Spring 2023 Semesters.</span></p>
                                        <p className="leading-normal"><span className="font-extrabold">• Organizations: </span> <span className="italic text-gray-400">Creative Lead at Google Developers Student Club (08/2021 – 07/2022).</span> </p>
                                        <p className="leading-normal"><span className="font-extrabold">• Relevant Coursework: </span> <span className="italic text-gray-400">Data Structures, Object Oriented Application Development, Database
                                            Fundamentals, Algorithms, Software Engineering, Software Project Management and Testing,
                                            Machine Learning, Mobile Application Development, Senior Project.</span> </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Education;