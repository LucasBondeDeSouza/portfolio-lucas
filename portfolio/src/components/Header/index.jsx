import React, { useState } from "react";
import { US } from 'country-flag-icons/react/3x2';
import { BR } from 'country-flag-icons/react/3x2';

export default () => {
    const [language, setLanguage] = useState('pt');

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
    };

    return (
        <header className="sticky-top bg-blue-dark">
            <div className="container">
                <nav className="navbar navbar-expand-md">
                    <div className="container-fluid">
                        <h1 className="navbar-brand m-0 text-white">PORTFÓLIO</h1>
                        
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
                            <nav className="navbar-nav">
                                <p className="nav-item m-0 text-white nav-link me-md-4">
                                    {language === 'pt' ? 'Sobre' : 'About'}
                                </p>
                                <p className="nav-item m-0 text-white nav-link me-md-4">
                                    {language === 'pt' ? 'Habilidades' : 'Skills'}
                                </p>
                                <p className="nav-item m-0 text-white nav-link me-md-4">
                                    {language === 'pt' ? 'Projetos' : 'Projects'}
                                </p>

                                <div className="d-flex align-items-center">
                                    {language === 'pt' ? <BR title="Português" style={{ width: '24px', height: 'auto' }} /> : 
                                        <US title="English" style={{ width: '24px', height: 'auto' }} />}
                                    <select 
                                        className="form-select-sm w-auto bg-transparent border-0 text-white" 
                                        value={language} 
                                        onChange={handleLanguageChange}
                                    >
                                        <option value="pt" className="text-dark">Português</option>
                                        <option value="en" className="text-dark">English</option>
                                    </select>
                                </div>
                            </nav>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};