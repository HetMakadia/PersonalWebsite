import "./LandingPage.css"
import img2 from "./hero2.PNG"
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function LandingPage() {
    return (
        <section id="main" className="relative items-center content-center grid grid-cols-2 select-none overflow-hidden">
            <motion.div
                className="relative z-10 col-span-2 lg:col-span-1 justify-self-center text-info p-14 lg:p-24"
                initial="hidden"
                animate="visible"
                variants={container}
            >
                <motion.h1 className="main-heading" variants={item}>
                    Hi 👋, <br/>   I'm <span className="font-bold text-base-content/70">Het Makadia</span>, <br/> <span className="font-bold text-base-content">Software</span> Developer
                </motion.h1>
                <br/>
                <motion.p className="main-text" variants={item}>
                    I build clean, responsive interfaces and back them with solid, well-structured systems. From
                    quick personal projects to full enterprise applications, I enjoy turning complex problems into
                    software that just works.
                </motion.p>
                <br/>
                <motion.div className="btn p-0" variants={item} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link className="group relative rounded-xl inline-block text-sm font-medium focus:outline-none focus:ring text-base-100" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                        <span className="absolute inset-0 border border-primary group-active:border-primary"/>
                        <span className="block border border-neutral bg-primary px-12 py-3 transition-transform active:border-primary active:bg-primary group-hover:-translate-x-1 group-hover:-translate-y-1">
                         <a>Contact Me</a>
                        </span>
                    </Link>
                </motion.div>

            </motion.div>

            <motion.div
                className="relative z-10 col-span-2 lg:col-span-1 justify-self-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
                <img src={img2} className="max-w-sm animate-float-slow" alt="Het Makadia" />
            </motion.div>

            <motion.div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
            >
                <Link to="workexperience" spy={true} smooth={true} offset={-70} duration={500} className="cursor-pointer">
                    <motion.svg
                        className="h-6 w-6 text-base-content/40"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </motion.svg>
                </Link>
            </motion.div>
        </section>
    )
}

export default LandingPage;
