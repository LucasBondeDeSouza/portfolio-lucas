import React from "react";

export default ({ language, darkMode }) => {

    const getYear = () => {
        return new Date().getFullYear()
    }

    return (
        <div className={darkMode ? 'bg-white' : 'bg-header-dark'}>
            <div className="container">
                <footer className="py-5">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><a href="#" className={`nav-link px-2 ${darkMode ? 'text-secondary' : 'text-light'}`}>{language === 'pt' ? 'Início' : 'Home'}</a></li>
                        <li className="nav-item"><a href="#about" className={`nav-link px-2 ${darkMode ? 'text-secondary' : 'text-light'}`}>{language === 'pt' ? 'Sobre' : 'About'}</a></li>
                        <li className="nav-item"><a href="#skills" className={`nav-link px-2 ${darkMode ? 'text-secondary' : 'text-light'}`}>{language === 'pt' ? 'Habilidades' : 'Skills'}</a></li>
                        <li className="nav-item"><a href="#projects" className={`nav-link px-2 ${darkMode ? 'text-secondary' : 'text-light'}`}>{language === 'pt' ? 'Projetos' : 'Projects'}</a></li>
                    </ul>
                    <p className={`text-center ${darkMode ? 'text-secondary' : 'text-light'}`}>© {getYear()} Lucas Bonde</p>
                </footer>
            </div>
        </div>
    )
}