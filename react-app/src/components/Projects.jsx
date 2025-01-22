import React from "react";
import Card from "./Card.jsx";
import projectBG from "../assets/projects-bg.jpg";
import Contact from "./Contact.jsx";

const Projects = () => {
    return (
        <div className="projects" style={{backgroundImage: `url(${projectBG})`}}>
            <div className="card-container">
                {/* Flappy Bird Card */}
                <a href="https://github.com/trk345/Flappy" target="_blank" rel="noopener noreferrer">
                    <div className="card">
                        Flappy Bird
                    </div>
                </a>

                {/* Anime Streaming Website Card */}
                <a href="https://github.com/trk345/Anime-Streaming-Website" target="_blank" rel="noopener noreferrer">
                    <div className="card">
                        Anime Streaming Website
                    </div>
                </a>

                {/* Blog Posting Website Card */}
                <a href="https://github.com/trk345/Corey-Schafer-Blog-Website-Modified-" target="_blank" rel="noopener noreferrer">
                    <div className="card">
                        Blog Posting Website
                    </div>
                </a>

                {/* To-Do-List Website Card */}
                <a href="https://trk345.github.io/To-Do-List-REACT-App/" target="_blank" rel="noopener noreferrer">
                    <div className="card">
                        To-Do-List App
                    </div>
                </a>
            </div>
            <Contact className="projects-footer"></Contact>
        </div>
    );
}

export default Projects;

{/* <a> Tag: Wraps each card to make it a clickable link.
href: Specifies the GitHub URL for the project.
target="_blank": Opens the link in a new tab.
rel="noopener noreferrer": Improves security by preventing the new page from accessing the
 window.opener object */}