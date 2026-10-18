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
    AWSLambda,
    CSharp,
    DOTNET,
    VisualStudio,
    SQLServer,
    TypeScript,
    AzureDevOpsServer
} from "../Technologies";
import {motion} from "framer-motion";
import {Reveal, RevealGroup, RevealItem} from "../common/Reveal";

function Skills() {
    const skillSet = [React, Angular, JavaScript, TypeScript, Java, Python, CSharp, DOTNET, Firebase, MongoDB, SQLServer, JSON, HTML, CSS, VisualStudio, TailwindCSS, Bootstrap, Github, Bitbucket, AzureDevOpsServer, JIRASoftware]
    return (
        <section id="skills" className="text-white bg-base-100 select-none">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <Reveal className="mx-auto max-w-lg text-center">
                    <h2 className="text-3xl font-bold lg:text-5xl">Things I know.</h2>
                </Reveal>
                <RevealGroup className="mt-8 grid grid-cols-3 gap-8 md:grid-cols-2 lg:grid-cols-5">

                    {skillSet.map((skill) =>
                        <RevealItem
                            key={skill.name}
                            whileHover={{ y: -4 }}
                            className="block rounded-xl border border-gray-800 p-4 lg:p-8 shadow-xl text-gray-500 transition-colors duration-300 bg-neutral hover:text-white hover:border-white hover:shadow-lg hover:shadow-gray-100/10">
                            <ol className=" relative border-gray-200 dark:border-gray-700 grid grid-cols-2">
                                <div className="col-span-2 justify-self-center ">
                                    <motion.img
                                        whileHover={{ scale: 1.15, rotate: 3 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                        className="h-6 lg:h-14" src={skill.iconLink} alt={skill.name}/>
                                </div>
                                <div className="col-span-2 justify-self-center">
                                    <br/>
                                    <p className="text-sm lg:text-lg">{skill.name}</p>
                                </div>
                            </ol>
                        </RevealItem>
                    )}

                </RevealGroup>
            </div>
        </section>
    )
}

export default Skills;