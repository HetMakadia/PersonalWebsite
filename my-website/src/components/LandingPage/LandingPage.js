import "./LandingPage.css"
import img from "./hero_main.png"

function LandingPage() {
    return (
        <div className="h-screen bg-base-100 content-center grid grid-cols-2">
            <div className="col-span-2 lg:col-span-1 justify-self-center text-info p-14 lg:p-24">
                <h1 className="main-heading">
                    Hi 👋, <br/> I'm Het Makadia, <br/> Full-Stack Developer
                </h1>
                <br/>
                <p className="main-text">
                    Combining my passion for frontend development with my knowledge of backend technologies, I'm
                    constantly pushing the boundaries of web development to create innovative, responsive, and engaging
                    digital experiences that drive user engagement and business growth. Whether it's a custom website or
                    a complex web application, I'm always up for a challenge.
                </p>
                <br/>
                <a className="group relative inline-block text-sm font-medium focus:outline-none focus:ring m-4 text-base-100" href="">
                    <span className="absolute inset-0 border border-primary group-active:border-primary"/>
                    <span className="block border border-neutral bg-primary px-12 py-3 transition-transform active:border-primary active:bg-primary group-hover:-translate-x-1 group-hover:-translate-y-1">
                        Hire Me
                    </span>
                </a>
                <a className="group relative inline-block text-sm font-medium text-primary focus:outline-none focus:ring active:text-primary m-4" href="">
                    <span className="absolute inset-0 border border-current"/>
                    <span className="block border border-current bg-neutral px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                        My Projects
                    </span>
                </a>

            </div>

            <div className="col-span-2 lg:col-span-1 justify-self-center">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
            </div>
        </div>
    )
}

export default LandingPage;