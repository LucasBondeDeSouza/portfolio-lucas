import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import Avatar from "../../assets/avatar.png"

export default () => {
    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="row w-100 h-75">
                <div className="mainHeader col-12 col-md-6 d-flex justify-content-center align-items-center">
                    <img src={Avatar} alt="avatar" />
                </div>

                <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
                    <h1 className="text-white d-flex flex-column">
                        Eu sou Lucas Bonde{' '}
                        <span>
                            <Typewriter
                                words={['Dev Web', 'Dev Front-End', 'Dev Back-End']}
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
}