import React from "react";
import projects from "./ProjectsData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default ({ language, lightMode }) => {
    return (
        <div className="container min-vh-100">
            <h1 className={`${lightMode ? 'dark' : 'text-white'} mb-5`}>{language === 'pt' ? 'Projetos' : 'Projects'}</h1>

            <div className="row">
                {projects.map(project => (
                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                        <div className={`${lightMode ? 'bg-card-light' : 'bg-card-dark'} shadow card border-0 p-2`}>
                            <div className="card-body">
                                <h4 className={`card-title ${lightMode ? 'text-dark' : 'text-white'}`}>{project.name}</h4>
                                <p className={`card-text ${lightMode ? 'text-dark' : 'text-white'}`}>{project.description[language]}</p>

                                <div className="d-flex align-items-center gap-2 my-2">
                                    {project.languages.map(language => (
                                        <i className={language.name}></i>
                                    ))}
                                </div>

                                <div className="d-flex gap-3">
                                    <a href={project.linkProject} className="btn btn-primary w-50 mt-2" target="_blank">
                                        {language === 'pt' ? 'Visitar' : 'Visit'}
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ms-2" />
                                    </a>
                                    <a href={project.link} className="btn btn-info text-white w-50 mt-2" target="_blank">
                                        {language === 'pt' ? 'Visitar' : 'Visit'}
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ms-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}