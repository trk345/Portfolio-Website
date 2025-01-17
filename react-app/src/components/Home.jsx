import React from "react";
import Card from "./Card.jsx";
import backgroundImage from '../assets/home-bg.jpg';

function Home() {
    const cards = [
        {
            backgroundImage: "https://via.placeholder.com/300x200",
            text: "About Me",
            route:  "/about",
        },
        {
            backgroundImage: "https://via.placeholder.com/300x200",
            text: "Projects",
            route: "/projects",
        },
        {
            backgroundImage: "https://via.placeholder.com/300x200",
            text: "Contact",
            route: "/contact",
        },
    ];

    return (
        <div className="home-page" style={{backgroundImage: `url(${backgroundImage})`}}>
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

export default Home;
