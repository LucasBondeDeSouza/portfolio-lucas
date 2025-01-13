import React from "react";

import 'devicon/devicon.min.css';
import skills from "./SkillsData"

export default ({ language, darkMode }) => {

    return (
        <div className="container min-vh-100">
            <h1 className={`${darkMode ? 'text-dark' : 'text-white'} mb-5`}>{language === 'pt' ? 'Habilidades' : 'Skills'}</h1>

            <div className="row mb-5">
                {skills.map(skill => (
                    <div className="col-6 col-md-4 col-lg-3 mb-3" key={skill.id}>
                        <div className={`${darkMode ? 'bg-card-light' : 'bg-card-dark'}  shadow card p-2 skill border-0`}>
                            <div className="logo">
                                <i className={skill.logo}></i>
                            </div>
                            <div className="card-body">
                                <h5 className={`card-title ${darkMode ? 'text-dark' : 'text-white'} text-center`}>{skill.name}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}