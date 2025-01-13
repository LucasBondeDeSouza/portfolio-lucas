import React from "react";
import projects from "./ProjectsData"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faPlayCircle } from "@fortawesome/free-solid-svg-icons";

export default ({ language, darkMode }) => {
    return (
        <div className="container pb-5 min-vh-100">
            <h1 className={`${darkMode ? 'dark' : 'text-white'} mb-5`}>{language === 'pt' ? 'Projetos' : 'Projects'}</h1>

            <div className="row">
                {projects.map(project => (
                    <div className="col-12 col-md-6 col-lg-4 mb-3 card-project" key={project.id}>
                        <div className={`${darkMode ? 'bg-card-light' : 'bg-card-dark'} shadow card border-0 p-2`}>
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div className="d-flex flex-column">
                                    <h4 className={`card-title ${darkMode ? 'text-dark' : 'text-white'}`}>{project.name}</h4>
                                    <p className={`card-text ${darkMode ? 'text-dark' : 'text-white'}`}>{project.description[language]}</p>
                                </div>

                                <div className="d-flex flex-column">
                                    <div className="d-flex align-items-center gap-2 my-2">
                                        {project.languages.map(language => (
                                            <i className={language.name} key={language.id}></i>
                                        ))}
                                    </div>

                                    <div className="d-flex gap-2">
                                        <a href={project.linkProject} className="btn btn-primary w-50 mt-2" target="_blank">
                                            {language === 'pt' ? 'Visitar' : 'Visit'}
                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ms-2" />
                                        </a>
                                        <a href={project.linkInAction} className="btn btn-info text-white w-50 mt-2" target="_blank">
                                            {language === 'pt' ? 'Em Ação' : 'In Action'}
                                            <FontAwesomeIcon icon={faPlayCircle} className="ms-2" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}