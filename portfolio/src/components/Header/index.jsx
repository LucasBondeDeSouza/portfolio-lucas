import React from "react";
import MenuToggle from "./MenuToggle";

export default () => {
    return (
        <header className="sticky-top bg-blue-dark">
            <div className="d-none d-md-inline">
                <div className="container">
                    <div className="row d-flex align-items-center py-2">
                        <div className="col-12 col-md-6">
                            <h1 className="w-50 m-0 text-white">PORTFÓLIO</h1>
                        </div>

                        <div className="col-12 col-md-6">
                            <nav className="d-flex align-items-center justify-content-around">
                                <p className="m-0 text-white fw-bold">Home</p>
                                <p className="m-0 text-white fw-bold">Sobre</p>
                                <p className="m-0 text-white fw-bold">Habilidades</p>
                                <p className="m-0 text-white fw-bold">Projetos</p>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <MenuToggle />
        </header>
    )
}