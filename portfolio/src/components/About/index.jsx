import React from "react";
import aboutDescription from './AboutData'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faDownload, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import ImgAbout from "../../assets/img-about.png"
import Curriculo from "../../assets/Curriculo.docx"

export default ({ language }) => {
    return (
        <div className="container min-vh-100">
            <h1 className="text-white mb-5">{language === 'pt' ? 'Sobre Mim' : 'About Me'}</h1>
            
            <div className="card about mb-5">
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <img src={ImgAbout} alt="" className="card-img-top" />
                        <div className="card-body">
                            <p className="card-text text-white">
                                {language === 'pt' ? aboutDescription[0].pt : aboutDescription[0].en}
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-lg-5 d-flex align-items-center">
                        <div className="card-body border-start">
                            <h2 className="text-white fw-bold mb-3 border-bottom pb-3">{language === 'pt' ? 'Contato' : 'Contact'}</h2>

                            <div className="d-flex flex-column pt-3 gap-4">
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-white fs-3" />
                                    <p className="card-text text-white">bondelucas77@gmail.com</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faPhone} className="text-white fs-3" />
                                    <p className="card-text text-white">+55 (11)985442354</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faGithub} className="text-white fs-3" />
                                    <a className="btn btn-light fw-bold btn-sm mx-4" href="https://github.com/LucasBondeDeSouza" target="_blank">
                                        {language === 'pt' ? 'Visitar' : 'Visit'}
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ms-2" />
                                    </a>
                                </div>
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faLinkedin} className="text-white fs-2" />
                                    <a className="btn btn-light fw-bold btn-sm mx-4" href="https://www.linkedin.com/in/lucasbonde/" target="_blank">
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