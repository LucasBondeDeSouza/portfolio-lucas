import React from "react";

export default () => {
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
                                <p className="nav-item m-0 text-white nav-link me-md-4">Home</p>
                                <p className="nav-item m-0 text-white nav-link me-md-4">Sobre</p>
                                <p className="nav-item m-0 text-white nav-link me-md-4">Habilidades</p>
                                <p className="nav-item m-0 text-white nav-link">Projetos</p>
                            </nav>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}