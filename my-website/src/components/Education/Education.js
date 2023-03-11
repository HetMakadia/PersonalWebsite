import "./Education.css"
import csulbImg from "./csulb.jpg"
import {React} from "../Technologies";

function Education() {
    return (
        <section className="text-white bg-base-100 ">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">My Education.</h2>
                </div>
                <div className="mt-8 grid grid-cols-1 gap-8 p-14">
                    <div className="p-14 content-center justify-self-center">
                        <div className="items-center justify-self-center text-info ">
                            <div className="card lg:card-side bg-base-100 hover:bg-base-content/5 shadow-xl w-100">
                                <figure><img className="h-40" src={csulbImg} alt="Album"/></figure>
                                <div className="card-body leading-3">
                                    <h2 className="card-title edu-heading">B.Sc. Computer Science</h2>
                                    <h2 className="card-title edu-sub-heading">California State University Long Beach</h2>
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
    )
}

export default Education;