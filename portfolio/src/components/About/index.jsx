import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import ImgAbout from "../../assets/img-about.png"
import Curriculo from "../../assets/Curriculo.docx"

export default () => {
    return (
        <div className="container min-vh-100">
            <h1 className="text-white mb-5">About Me</h1>
            
            <div className="card about mb-5">
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <img src={ImgAbout} alt="" className="card-img-top" />
                        <div className="card-body">
                            <p className="card-text text-white">
                                Olá! Sou Lucas Bonde, um entusiasta da tecnologia e formado em Análise e Desenvolvimento de Sistemas apaixonado por resolver problemas por meio da programação. Busco constantemente expandir meu conhecimento e aprimorar minhas habilidades na criação de soluções inovadoras e eficientes. Com um forte interesse em Desenvolvimento Web, estou determinado a contribuir de forma significativa para a indústria da tecnologia. Além de meu entusiasmo pela programação, também valorizo a colaboração em equipe e estou sempre pronto para enfrentar novos desafios. Estou ansioso para compartilhar meu trabalho e experiências neste portfólio. Seja bem-vindo!
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-lg-5 d-flex align-items-center">
                        <div className="card-body border-start">
                            <h2 className="text-white fw-bold mb-3 border-bottom pb-3">Contato</h2>

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
                                        Visitar
                                    </a>
                                </div>
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon icon={faLinkedin} className="text-white fs-2" />
                                    <a className="btn btn-light fw-bold btn-sm mx-4" href="https://www.linkedin.com/in/lucasbonde/" target="_blank">
                                        Visitar
                                    </a>
                                </div>
                                <a className="btn btn-primary fw-bold w-100 d-flex align-items-center justify-content-center gap-2" href={Curriculo} download='Curriculo_Lucas.docx'>
                                    <FontAwesomeIcon icon={faDownload} />
                                    Baixar Currículo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}