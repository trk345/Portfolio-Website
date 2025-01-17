import React from "react";
import aboutPageImage from "../assets/boat.jpg"

function About(){
    return (  
    <div className="about-page">
        <div className="about-content">
            <h1>Welcome to My Website!</h1> 
            <p>
                I am Tawhid, and this is my crude portfolio.
                I completed both my O Levels and A Levels from Mastermind English Medium School in 2018
                and 2020 respectively. I achieved the Edexcel High Achiever's Awards (2018) and 
                the Daily Star Award (2018) as well. I did my undergrad in BRAC University and I 
                graduated with a BSc in Computer Science in late 2024. During my time at BRACU, I 
                did all my core CSE courses in Python, and hence, I have a strong grasp on this
                programming language. I did my thesis on an NLP topic -  Early Detection of Anorexia
                in Social Media Posts. Some of the important courses that I had to complete were:
                OOP, Data Structures and Algorithms, Machine Learning, 
                Data Science, NLP, Software Engineering, and Image Processing. 
            </p>
            <p>
                Additionally, I worked in BRACU as a Student Tutor/Undergrad Teaching Assistant for
                two semesters, where I helped students overcome their weaknesses and guided them 
                throughout the courses so that they were well-prepared for their assessments, using 
                both online and offline consultations. My job also entailed checking their 
                assignments and quiz scripts.
            </p>
        </div>

        <div className="about-image" style={{backgroundImage: `url(${aboutPageImage})`}}></div>
    </div>
    )
}

export default About;