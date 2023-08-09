import {
    Angular,
    CSS, Firebase,
    Github,
    HTML,
    Java,
    JavaScript,
    JIRASoftware,
    MongoDB,
    Python,
    React,
    NodeJS,
    PostgreSQL,
    TailwindCSS,
    Bootstrap,
    Bitbucket,
    JSON,
    AWSLambda
} from "../Technologies";

function Skills() {
    const skillSet = [React, Angular, NodeJS, JavaScript, Java, Python, Firebase, MongoDB, PostgreSQL, AWSLambda, JSON, HTML, CSS, TailwindCSS, Bootstrap, Github, Bitbucket ,JIRASoftware]
    return (
        <section id="skills" className="text-white bg-base-100">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold lg:text-5xl">Things I know.</h2>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-8 md:grid-cols-2 lg:grid-cols-5">

                    {skillSet.map((skill) =>
                        <div className="block rounded-xl border border-gray-800 p-4 lg:p-8 shadow-xl text-gray-500 transition bg-neutral hover:text-white hover:border-white hover:shadow-gray-100/10">
                            <ol className=" relative border-gray-200 dark:border-gray-700 grid grid-cols-2">
                                <div className="col-span-2 justify-self-center ">
                                    <img className="h-6 lg:h-14" src={skill.iconLink}/>
                                </div>
                                <div className="col-span-2 justify-self-center">
                                    <br/>
                                    <p className="text-sm lg:text-lg">{skill.name}</p>
                                </div>
                            </ol>
                        </div>
                    )}

                </div>
            </div>
        </section>
    )
}

export default Skills;