import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import Avatar from "../../assets/avatar.png";

export default ({ language, darkMode }) => {
    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="row w-100 h-75">
                <div className="mainHeader col-12 col-md-6 d-flex justify-content-center align-items-center">
                    <img src={Avatar} alt="avatar" className="img-fluid" />
                </div>

                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                    <h1 className={`${darkMode ? 'text-dark' : 'text-white'} d-flex flex-column`}>
                        {language === 'pt' ? 'Eu sou Lucas Bonde' : "I'm Lucas Bonde"}{' '}
                        <span>
                            <Typewriter
                                words={language === 'pt' ? ['Dev Web', 'Dev Front-End', 'Dev Back-End'] : ['Web Dev', 'Front-End Dev', 'Back-End Dev']}
                                loop={Infinity}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={70}
                                delaySpeed={1500}
                            />
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    );
};