import "./Education.css"
import csulbImg from "./csulb.jpg"
import {React} from "../Technologies";

function Education() {
    return (
        <div>
            <section className="text-white bg-base-100 ">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">My Education.</h2>
                </div>
                    <div className="grid grid-cols-1 gap-8 mt-8">
                    <div className="content-center justify-self-center">
                        <div className="items-center justify-self-center text-info ">
                            <div className="card border border-neutral hover:border-white grid grid-cols-12 lg:card-side bg-neutral hover:bg-base-content/5 shadow-xl w-100">
                                <div className="self-center	col-span-5 col-start-2 text-center justify-self-center	">
                                    <h2 className="card-title edu-heading justify-center">B.Sc. Computer Science</h2>
                                    <h2 className="card-title edu-sub-heading justify-center">California State University Long Beach</h2>
                                    <div className="avatar">
                                        <div className="w-60 rounded-full">
                                            <img className="h-40 p-4 rounded-xl" src={csulbImg} alt="Album"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body leading-3 col-span-5 col-start-7">
                                    <div className="items-center text-info edu-text">
                                        <h1>Relevant Coursework:</h1>
                                        <p> - Data Structures</p>
                                        <p> - Object Oriented Application Development</p>
                                        <p> - Database Fundamentals</p>
                                        <p> - Algorithms</p>
                                        <p> - Software Engineering</p>
                                        <p> - Software Project Management and Testing</p>
                                        <p> - Machine Learning</p>
                                        <p> - Mobile Application Development</p>
                                        <p> - Senior Project</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div>

    )
}

export default Education;