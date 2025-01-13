import React from "react";
import { US, BR } from 'country-flag-icons/react/3x2';

export default ({ language, setLanguage, darkMode }) => {

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    return (
        <>
            <header className={`sticky-top ${darkMode ? 'bg-info' : 'bg-header-dark'} shadow-sm`}>
                <div className="container">
                    <nav className="navbar navbar-expand-md">
                        <div className="container-fluid">
                            <a href="#mainHeader" className="text-decoration-none text-reset">
                                <h1 className='navbar-brand m-0 text-white'>PORTFÓLIO</h1>
                            </a>

                            <button
                                className="navbar-toggler custom-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse d-md-flex justify-content-end" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li>
                                        <a href="#about" className="nav-item m-0 nav-link text-white me-md-4">
                                            {language === 'pt' ? 'Sobre' : 'About'}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#skills" className="nav-item m-0 nav-link text-white me-md-4">
                                            {language === 'pt' ? 'Habilidades' : 'Skills'}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#projects" className="nav-item m-0 nav-link text-white me-md-4">
                                            {language === 'pt' ? 'Projetos' : 'Projects'}
                                        </a>
                                    </li>

                                    <li className="nav-item d-flex align-items-center mt-sm-0 mt-2 ms-sm-2 ms-0">
                                        {language === 'pt' ? <BR title="Português" style={{ width: '24px', height: 'auto' }} /> :
                                            <US title="English" style={{ width: '24px', height: 'auto' }} />}
                                        <select
                                            className='form-select-sm w-auto bg-transparent border-0 text-white ms-1'
                                            value={language}
                                            onChange={handleLanguageChange}
                                        >
                                            <option value="pt" className="text-dark">PT-BR</option>
                                            <option value="en" className="text-dark">EN-US</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};