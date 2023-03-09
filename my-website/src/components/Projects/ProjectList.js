import {CalendlyAPI, Firebase, GoogleCloud, GoogleMapsAPI, React, TailwindCSS, Java, Python, Github, HTML, CSS, JavaScript} from "../technologies";
import rooster from "./rooster.png";
import stuxpert from "./stuxpert.png"
import web from "./web.jpeg"
import console from "./console.png"

export const projects = [
    {
        logo: rooster,
        name: "Rooster - Roommate Finder",
        description: "Currently working on Rooster, a roommate-finding application that aims to simplify the process of finding a new roommate. Rooster features an array of user-friendly tools to streamline the process, including a calling feature and mini games to engage users. As a team performing Senior Project, we are committed to creating a seamless user experience that meets the needs of a diverse user base.",
        techUsed: [React, Firebase, TailwindCSS, Github],
        github: "Private"
    },

    {
        logo: stuxpert,
        name: "stuXpert",
        description: "Our 4-person team created a full-stack web app with a discussion board where users can post questions and receive comments. The app includes a like/dislike feature for expressing agreement or disagreement. We implemented authentication and session login functionality for user security. Our project demonstrates our skills in developing scalable and user-friendly web applications. The advanced features enhance the overall user experience.",
        techUsed: [React, Firebase, TailwindCSS, GoogleCloud, Github],
        github: "https://github.com/Deep392/BeachHacks-7"
    },
    {
        logo: web,
        name: "Personal Website",
        description: "Revamped and modernized my portfolio using the latest tools and technologies. Transferred it onto a visually appealing and user-friendly web page that showcases my education, projects, and other pertinent details.",
        techUsed: [React, TailwindCSS, Github],
        github: "https://github.com/HetMakadia/PersonalWebsite",
        name2: "Previous Version",
        description2: "Using HTML and CSS, created my personal interactive website with animations and navigation bar. A little bit of Javascript was also used while building this. VSC was used for coding and making this website.",
        techUsed2: [ HTML, CSS, JavaScript],
        github2: "https://github.com/HetMakadia/hetmakadia.github.io"
    },
    {
        logo: web,
        name: "Real Estate Website",
        description: "In a team, developed a website for a realtor to support the growth of their business. This involved building the website's frontend and backend structures, as well as implementing key features, such as\n" +
            "the Google Maps API, Calendly API and Admin Panel. My development work focused on creating a" +
            "website that was intuitive and user-friendly, while also meeting the specific needs of the real estate" +
            "industry",
        techUsed: [React, GoogleMapsAPI, CalendlyAPI, Github],
        github: "Private"
    },

    {
        logo: console,
        name: "Dungeon Master Game",
        description: "Using Java, its class relationship concepts and other concepts like Abstraction and Interfaces, made a program that allows user to explore a dungeon maze and fight monsters that come across. Other function like healing up the user, start place and finish place was also added. I used VSC during the making of the program.",
        techUsed: [Java],
        github: "Console"
    },
    {
        logo: console,
        name: "Bookstore System",
        description: "Learned and applied concepts of Data Structures to build an bookstore system throughout the semester. Understood and applied lists, maps, sorts, and queues to build the different functionality to modify the lists and cart in bookstore.",
        techUsed: [Python],
        github: "Console"
    },
];