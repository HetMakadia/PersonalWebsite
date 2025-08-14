import {
    CalendlyAPI,
    Firebase,
    GoogleCloud,
    GoogleMapsAPI,
    React,
    TailwindCSS,
    Java,
    Python,
    Github,
    HTML,
    CSS,
    JavaScript,
    PostgreSQL
} from "../Technologies";
import rooster from "./rooster.png";
import stuxpert from "./stuxpert.png"
import web from "./web.jpeg"
import console from "./console.png"
import databaseimg from "./database.png"
import supremecarbon from "./supremecarbon.png"

export const projects = [
    {
        logo: supremecarbon,
        name: "Supreme Carbon Website",
        description: "Designed and developed the official website for Supreme Carbon, a manufacturing business in India, using React.js, Firebase, Tailwind CSS, increasing user engagement by 20% and improving mobile experience. " +
            "Managed hosting, domain, and deployment on GitHub Pages, delivering a full-stack solution.",
        techUsed: [React, Firebase, TailwindCSS, Github, GoogleMapsAPI],
        github: "Private"
    },

    {
        logo: rooster,
        name: "Rooster - Roommate Finder",
        description: "Co-developed Rooster - a roommate finder web application for a Senior Project, implementing features such as user matching, advanced search filters, in-app messaging, mini-games, and account management to address the needs of students and professionals seeking compatible roommates" +
            "Developed a multi-page roommate finder app with React Router v6, Context API, and custom hooks for authentication, chat, and search filters. Implemented lazy loading, real-time messaging via Firebase Realtime Database, and debounced search filtering for large datasets.",
        techUsed: [React, Firebase, TailwindCSS, Github],
        github: "Private"
    },

    {
        logo: web,
        name: "Real Estate Website",
        description: "Developed a website for a realtor - real world client, contributing to both frontend and backend development while gathering client's requirement and following SDLC." +
            "Created an admin dashboard with controlled components, API-driven Google Maps integration, and Calendly scheduling. Optimized large property listings using React.memo and list virtualization, backed by SQL stored procedures for CRUD operations.",
        techUsed: [React, GoogleMapsAPI, CalendlyAPI, Github],
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
        logo: databaseimg,
        name: "Automobile Database",
        description: "Using SQL queries and concepts, build an automobile database which includes the storage of manufacturers, automobiles, models, customers, and contracts. While making the database, proper procedure was followed including the UML diagrams, Relation Schema, Class descriptions, Association description, and others. I used IntelliJ Idea during the making of the program.",
        techUsed: [PostgreSQL],
        github: "https://github.com/HetMakadia/AutomobileDatabase"
    },
    {
        logo: console,
        name: "Dungeon Master Game",
        description: "Using Java, its className relationship concepts and other concepts like Abstraction and Interfaces, made a program that allows user to explore a dungeon maze and fight monsters that come across. Other function like healing up the user, start place and finish place was also added. I used VSC during the making of the program.",
        techUsed: [Java],
        github: "https://github.com/HetMakadia/Dungeon-Master-Game",
        logo2: console,
        name2: "Bookstore System",
        description2: "Learned and applied concepts of Data Structures to build an bookstore system throughout the semester. Understood and applied lists, maps, sorts, and queues to build the different functionality to modify the lists and cart in bookstore.",
        techUsed2: [Python],
        github2: "Console",

    },
];