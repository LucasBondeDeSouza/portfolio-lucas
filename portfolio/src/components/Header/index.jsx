import React from "react";

export default () => {
    return (
        <div className="d-none d-md-inline sticky-top">
            <div className="bg-dark bg-opacity-75">
                <div className="container">
                    <div className="row d-flex align-items-center py-2">
                        <div className="col-12 col-md-6">
                            <h1 className="w-50 m-0 text-white">PORTFÓLIO</h1>
                        </div>

                        <div className="col-12 col-md-6">
                            <nav className="d-flex align-items-center justify-content-around">
                                <p className="m-0 text-white">Home</p>
                                <p className="m-0 text-white">About</p>
                                <p className="m-0 text-white">Skills</p>
                                <p className="m-0 text-white">Projects</p>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}