import React from "react";
import Card from "./Card.jsx";
import projectBG from "../assets/projects-bg.jpg";

const Projects = () => {
    const cards = [
        {
            backgroundImage: "https://via.placeholder.com/300x200",
            text: "Blog-Posting Website",
            route:  "/blog-posting-website",
        },
        {
            backgroundImage: "https://via.placeholder.com/300x200",
            text: "Anime Streaming Website",
            route: "/anime-streaming-website",
        },
        {
            backgroundImage: "https://via.placeholder.com/300x200",
            text: "Flappy Bird",
            route: "/flappy-bird",
        },
    ];

    return (
        <div className="projects" style={{backgroundImage: `url(${projectBG})`}}>
            <div className="card-container">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        backgroundImage={card.backgroundImage}
                        text={card.text}
                        route={card.route}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;