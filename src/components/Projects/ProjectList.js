import {CalendlyAPI, Firebase, GoogleCloud, GoogleMapsAPI, React, TailwindCSS, Java, Python, Github, HTML, CSS, JavaScript} from "../Technologies";
import rooster from "./rooster.png";
import stuxpert from "./stuxpert.png"
import web from "./web.jpeg"
import console from "./console.png"

export const projects = [
    {
        logo: rooster,
        name: "Rooster - Roommate Finder",
        description: "Contributed to the development of a roommate finder app as a key member of a collaborative team for a Senior Project.\n" +
            "Analyzed the need for the app and created essential software development documents.\n" +
            "Actively participated in coding and testing phases, ensuring the app met the specific requirements of users seeking compatible roommates.\n" +
            "Accomplished a range of features, including user matching, user search, messaging capabilities, mini games, post creation, and account management functionalities.",
        techUsed: [React, Firebase, TailwindCSS, Github],
        github: "Private"
    },

    {
        logo: stuxpert,
        name: "stuXpert",
        description: "Participated with a team of four in the BeachHacks Hackathon to create a full-stack web application.\n" +
            "Developed a discussion board platform that facilitated user engagement and collaboration by allowing users to post questions and receive comments.\n" +
            "Prioritized user security by implementing authentication and session login functionality.\n" +
            "Demonstrated skills in developing scalable and user-friendly solutions, incorporating advanced features that enhanced the overall user experience.",
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
        description: "Played a vital role as a member of a collaborative team of four in the development of a website for a realtor, contributing to both frontend and backend development.\n" +
            "Successfully implemented key features such as the Google Maps API, Calendly API, and Admin Panel to support the growth of the realtor's business.\n" +
            "Conducted a thorough analysis to gather insights and meet client needs and requirements.\n" +
            "Utilized software development life cycle documents and graphs to closely observe and analyze results, driving continuous improvement and optimization.",
        techUsed: [React, GoogleMapsAPI, CalendlyAPI, Github],
        github: "Private"
    },

    {
        logo: console,
        name: "Dungeon Master Game",
        description: "Using Java, its className relationship concepts and other concepts like Abstraction and Interfaces, made a program that allows user to explore a dungeon maze and fight monsters that come across. Other function like healing up the user, start place and finish place was also added. I used VSC during the making of the program.",
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