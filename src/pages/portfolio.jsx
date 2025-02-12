 import React from "react";
import Project from "../components/project.jsx";

import "../styles/portfolio.css";

const projects = [
    { title: "Social Network", image: "/assets/SOCIAL-NETWORK-API.png", url:"https://github.com/D-Wargle/Social-Network-API-Fix" },
    { title: "Employee Tracker", image: "/SQL-EMPLOYEE-TRACKER.png", url:"https://github.com/D-Wargle/SQL-EmployeeTracker" },
    { title: "Chartz Music App", image: "/CHARTZ-Music-app.png", url:"https://github.com/MichaelaHunt/Chartz" },
    { title: "Kanban Board", image: "/KANBAN CHALLENGE.png", url:"https://github.com/D-Wargle/Kanban-Challenge" },
    { title: "Book Search Engine", image: "/HARRY PUTTER BOOK SEARCH.png", url:"https://github.com/D-Wargle/Book-Search-Engine" },
    { title: "Weather API", image: "/WEATHER API.png", url:"https://github.com/D-Wargle/Weather-API-Challenge" },
];

export default function Portfolio() {
    return (
        <div class='port'>
            <h1><strong>Portfolio</strong></h1>
            <div className="portfolio-container">
                {projects.map((project, index) => (
                    <Project key={index} title={project.title} image={project.image} url={project.url} />
                ))}
            </div>
        </div>
    );
}