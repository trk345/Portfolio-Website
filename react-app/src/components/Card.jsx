import React from "react";
import { Link } from "react-router-dom";

function Card({ backgroundImage, text, route }) {
    return (
        <Link to={route} style={{ textDecoration: "none" }}>
            <div
                className="card"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                }}
            >
                <span>{text}</span>
            </div>
        </Link>
    );
}

export default Card;
