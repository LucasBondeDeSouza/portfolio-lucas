import React from "react";
import { US, BR } from 'country-flag-icons/react/3x2';

export default ({ language, setLanguage, lightMode, setLightMode }) => {

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    const toggleLightMode = () => {
        setLightMode(!lightMode);
    }

    return (
        <>
            <header className={`sticky-top ${lightMode ? 'bg-header-light' : 'bg-header-dark'} shadow-sm`}>
                <div className="container">
                    <nav className="navbar navbar-expand-md">
                        <div className="container-fluid">
                            <h1 className={`navbar-brand m-0 ${lightMode ? 'text-dark' : 'text-white'}`}>PORTFÓLIO</h1>

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
                                    <li className={`nav-item m-0 ${lightMode ? 'text-dark' : 'text-white'} nav-link me-md-4`}>
                                        {language === 'pt' ? 'Sobre' : 'About'}
                                    </li>
                                    <li className={`nav-item m-0 ${lightMode ? 'text-dark' : 'text-white'} nav-link me-md-4`}>
                                        {language === 'pt' ? 'Habilidades' : 'Skills'}
                                    </li>
                                    <li className={`nav-item m-0 ${lightMode ? 'text-dark' : 'text-white'} nav-link me-md-4`}>
                                        {language === 'pt' ? 'Projetos' : 'Projects'}
                                    </li>
                                    <li className="nav-item d-flex align-items-center me-md-4">
                                        {language === 'pt' ? <BR title="Português" style={{ width: '24px', height: 'auto' }} /> :
                                            <US title="English" style={{ width: '24px', height: 'auto' }} />}
                                        <select
                                            className={`form-select-sm w-auto bg-transparent border-0 ${lightMode ? 'text-dark' : 'text-white'} ms-2`}
                                            value={language}
                                            onChange={handleLanguageChange}
                                        >
                                            <option value="pt" className="text-dark">{language === 'pt' ? 'Português' : 'Portuguese'}</option>
                                            <option value="en" className="text-dark">{language === 'en' ? 'English' : 'Inglês'}</option>
                                        </select>
                                    </li>
                                    <li className="nav-item d-flex align-items-center">
                                        <div className="form-check form-switch m-0">
                                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggleLightMode} />
                                        </div>
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