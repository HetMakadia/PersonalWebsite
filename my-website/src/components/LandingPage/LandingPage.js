import "./LandingPage.css"
import img from "./hero_main.JPEG"
import {Link} from "react-scroll";

function LandingPage() {
    return (
        <section id="main" className=" items-center bg-base-100 content-center grid grid-cols-2">
            <div className="col-span-2 lg:col-span-1 justify-self-center text-info p-14 lg:p-24">
                <h1 className="main-heading">
                    Hi 👋, <br/>   I'm <span className="font-bold text-gray-400">Het Makadia</span>, <br/> <span className="font-bold text-gray-600">Full-Stack</span> Developer
                </h1>
                {/*<h1 className="main-heading">*/}
                {/*    Hi 👋, <br/>   I'm <span className="font-bold text-orange-600">Het Makadia</span>, <br/> <span className="font-bold text-pink-600">Full-Stack</span> Developer*/}
                {/*</h1>*/}
                <br/>
                <p className="main-text">
                    Combining my passion for frontend development with my knowledge of backend technologies, I'm
                    constantly pushing the boundaries of web development to create innovative, responsive, and engaging
                    digital experiences that drive user engagement and business growth. Whether it's a custom website or
                    a complex web application, I'm always up for a challenge.
                </p>
                <br/>
                <a className="group relative rounded-xl inline-block text-sm font-medium focus:outline-none focus:ring text-base-100" href="">
                    <span className="absolute inset-0 border border-primary group-active:border-primary"/>
                    <span className="block border border-neutral bg-primary px-12 py-3 transition-transform active:border-primary active:bg-primary group-hover:-translate-x-1 group-hover:-translate-y-1">
                        <a><Link activeClass="text-white" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Hire Me</Link></a>
                    </span>
                </a>
            </div>

            <div className="col-span-2 lg:col-span-1 justify-self-center">
                <img src={img} className="max-w-lg" />
            </div>
        </section>
    )
}

export default LandingPage;