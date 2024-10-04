import React from "react";

export default ({ language, lightMode }) => {

    return (
        <div className={lightMode ? 'bg-white' : 'bg-header-dark'}>
            <div className="container">
                <footer className="py-5">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><a href="#" className={`nav-link px-2 ${lightMode ? 'text-secondary' : 'text-light'}`}>Home</a></li>
                        <li className="nav-item"><a href="#about" className={`nav-link px-2 ${lightMode ? 'text-secondary' : 'text-light'}`}>Sobre</a></li>
                        <li className="nav-item"><a href="#skills" className={`nav-link px-2 ${lightMode ? 'text-secondary' : 'text-light'}`}>Habilidades</a></li>
                        <li className="nav-item"><a href="#projects" className={`nav-link px-2 ${lightMode ? 'text-secondary' : 'text-light'}`}>Projetos</a></li>
                    </ul>
                    <p className={`text-center ${lightMode ? 'text-secondary' : 'text-light'}`}>© 2024 Company, Inc</p>
                </footer>
            </div>
        </div>
    )
}