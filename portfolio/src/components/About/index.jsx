import React from "react";
import aboutDescription from './AboutData'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faDownload, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import ImgAbout from "../../assets/img-about.png"
import Curriculo from "../../assets/Curriculo.docx"

export default ({ language, lightMode }) => {
    return (
        <div className="container min-vh-75">
            <h1 className={`${lightMode ? 'text-dark' : 'text-white'} mb-5`}>{language === 'pt' ? 'Sobre Mim' : 'About Me'}</h1>
            
            <div className={`card ${lightMode ? 'bg-card-light' : 'bg-card-dark'} shadow border-0 mb-5`}>
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <img src={ImgAbout} alt="" className="card-img-top" />
                        <div className="card-body">
                            <p className={`card-text ${lightMode ? 'text-dark' : 'text-white'}`}>
                                {language === 'pt' ? aboutDescription[0].pt : aboutDescription[0].en}
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-lg-5 d-flex align-items-center">
                        <div className="card-body border-start">
                            <h2 className={`${lightMode ? 'text-dark' : 'text-white'} fw-bold mb-3 border-bottom pb-3`}>{language === 'pt' ? 'Contato' : 'Contact'}</h2>

                            <div className="d-flex flex-column pt-3 gap-4">
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faEnvelope} className={`${lightMode ? 'text-dark' : 'text-white'} fs-3`} />
                                    <p className={`card-text ${lightMode ? 'text-dark' : 'text-white'}`}>bondelucas77@gmail.com</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faPhone} className={`${lightMode ? 'text-dark' : 'text-white'} fs-3`} />
                                    <p className={`card-text ${lightMode ? 'text-dark' : 'text-white'}`}>+55 (11)985442354</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faGithub} className={`${lightMode ? 'text-dark' : 'text-white'} fs-3`} />
                                    <a className={`btn ${lightMode ? 'btn-primary' : 'btn-light'} fw-bold btn-sm mx-4`} href="https://github.com/LucasBondeDeSouza" target="_blank">
                                        {language === 'pt' ? 'Visitar' : 'Visit'}
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ms-2" />
                                    </a>
                                </div>
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faLinkedin} className={`${lightMode ? 'text-dark' : 'text-white'} fs-2`} />
                                    <a className={`btn ${lightMode ? 'btn-primary' : 'btn-light'} fw-bold btn-sm mx-4`} href="https://www.linkedin.com/in/lucasbonde/" target="_blank">
                                        {language === 'pt' ? 'Visitar' : 'Visit'}
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ms-2" />
                                    </a>
                                </div>
                                
                                <a className="btn btn-primary fw-bold w-100 d-flex align-items-center justify-content-center gap-2" href={Curriculo} download='Curriculo_Lucas.docx'>
                                    <FontAwesomeIcon icon={faDownload} />
                                        {language === 'pt' ? 'Baixar Currículo' : 'Download Resume'}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}