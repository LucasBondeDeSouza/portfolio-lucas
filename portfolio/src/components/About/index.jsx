import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import ImgAbout from "../../assets/img-about.png"
import Curriculo from "../../assets/Curriculo.docx"

export default () => {
    return (
        <div className="container">
            <h1 className="text-white">About Me</h1>
            
            <div className="min-vh-100 d-flex justify-content-center align-items-center">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-lg-8">
                        <div className="card about">
                            <img src={ImgAbout} alt="img about" className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text text-white">
                                    Olá! Sou Lucas Bonde, um entusiasta da tecnologia e formado em Análise e Desenvolvimento de Sistemas apaixonado por resolver problemas por meio da programação. Busco constantemente expandir meu conhecimento e aprimorar minhas habilidades na criação de soluções inovadoras e eficientes. Com um forte interesse em Desenvolvimento Web, estou determinado a contribuir de forma significativa para a indústria da tecnologia. Além de meu entusiasmo pela programação, também valorizo a colaboração em equipe e estou sempre pronto para enfrentar novos desafios. Estou ansioso para compartilhar meu trabalho e experiências neste portfólio. Seja bem-vindo!
                                </p>

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