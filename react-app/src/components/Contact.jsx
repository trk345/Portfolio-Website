import React from "react";

const Contact = ({ className }) => { //taking prop className
    return (
        <footer className={`footer ${className}`}>
            <p>
            <a href="https://linkedin.com/in/tawhid-khan-b31070311" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
            <a href="https://github.com/trk345" target="_blank" rel="noopener noreferrer">GitHub</a> |
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tawhidkhan3@gmail.com" target ="_blank" rel="noopener noreferrer">Email</a>
            © 2025 TRK's Portfolio. All rights reserved.
            </p>
        </footer>
    );
};

export default Contact;