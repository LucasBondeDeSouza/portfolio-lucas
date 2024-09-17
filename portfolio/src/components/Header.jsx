import React, { useState, useEffect } from "react";

const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <React.Fragment>
            <header>
                <h1 onClick={() => scrollToSection('main')}>Portfólio</h1>
                <div className="Nav">
                    <p onClick={() => scrollToSection('about')}>About</p>
                    <p onClick={() => scrollToSection('skills')}>Skills</p>
                    <p onClick={() => scrollToSection('projects')}>Projects</p>
                    <p onClick={() => scrollToSection('contact')}>Contact</p>
                </div>
            </header>

            <div onClick={() => scrollToSection('main')} className={`Scroll-top ${isScrolled ? 'show' : ''}`}>
                <FaArrowUp />
            </div>
        </React.Fragment>
    );
};

export default Nav;