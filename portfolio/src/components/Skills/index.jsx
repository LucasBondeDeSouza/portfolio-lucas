import React from "react";

import 'devicon/devicon.min.css';
import skills from "./SkillsData"

export default () => {

    return (
        <div className="container min-vh-100">
            <h1 className="text-white mb-5">Habilidades</h1>

            <div className="row mb-5">
                {skills.map(skill => (
                    <div className="col-6 col-md-4 col-lg-3 mb-3">
                        <div className="card p-2 skill">
                            <div className="logo">
                                <i className={skill.logo}></i>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-white text-center">{skill.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}