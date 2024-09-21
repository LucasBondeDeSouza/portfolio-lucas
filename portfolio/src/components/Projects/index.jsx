import React from "react";


export default () => {
    return (
        <div className="container">
            <h1 className="text-white">Projects</h1>

            <div className="min-vh-100">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                        <div className="card p-2">
                            <img src="" className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title text-white">LitShare</h5>
                                <p className="card-text text-white">Trata-se de uma Rede Social que permite aos usuários compartilhar suas experiências literárias. A aplicação conta com funcionalidades completas de autenticação (login, registro e integração com o Google), onde os usuários podem adicionar, editar e deletar suas próprias resenhas de livros, além de seguir outros leitores, curtir as publicações e visualizar o que estão lendo.</p>

                                <div className="d-flex align-items-center gap-2 my-2">
                                    <i className="devicon-html5-plain colored fs-5"></i>
                                    <i className="devicon-css3-plain colored fs-5"></i>
                                    <i className="devicon-javascript-plain colored fs-5"></i>
                                    <i className="devicon-nodejs-plain-wordmark colored"></i>
                                    <i className="devicon-bootstrap-plain colored fs-5"></i>
                                    <i className="devicon-postgresql-plain colored fs-5"></i>
                                </div>

                                <a href="https://litshare.vercel.app/" className="btn btn-primary w-100 mt-2" target="_blank">Visitar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                        <div className="card p-2">
                            <div className="card-body">
                                <h5 className="card-title text-white">NewsNow</h5>
                                <p className="card-text text-white">Com o auxilio do professor Rodolfo Mori desenvolvi o 𝗻𝗲𝘄𝘀𝗡𝗼𝘄 que te permite buscar as últimas notícias sobre qualquer tema que desejar, de maneira rápida e intuitiva, usando a API gnews.io.</p>

                                <div className="d-flex align-items-center gap-2 my-2">
                                    <i className="devicon-react-original colored"></i>
                                    <i className="devicon-nodejs-plain-wordmark colored"></i>
                                    <i className="devicon-bootstrap-plain colored fs-5"></i>
                                </div>

                                <a href="https://newsnow-snowy.vercel.app/" className="btn btn-primary w-100 mt-2" target="_blank">Visitar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-3">
                        <div className="card p-2">
                            <div className="card-body">
                                <h5 className="card-title text-white">Clone Twitter</h5>
                                <p className="card-text text-white">Fico feliz em compartilhar que finalizei um projeto com o auxilio do professor Rodolfo Mori onde recriei a interface e funcionalidades principais do Twitter usando React para a construção de componentes dinâmicos e Tailwind CSS para o design responsivo e moderno.</p>

                                <div className="d-flex align-items-center gap-2 my-2">
                                    <i className="devicon-react-original colored"></i>
                                    <i className="devicon-tailwindcss-original colored fs-5"></i>
                                </div>

                                <a href="https://clone-twitter-three-blond.vercel.app/" className="btn btn-primary w-100 mt-2" target="_blank">Visitar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}