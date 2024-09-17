import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import Avatar from "../assets/avatar.png"

export default () => {
    return (
        <div id="main" className="Header--container">
            
            <div className="Header--person">
                <div className="Header--avatar">
                    <img src={Avatar} alt="Avatar" />
                </div>

                <div className="Header--typical">
                    <p>
                        I'm Lucas Bonde{' '}
                        <br />
                        <span>
                            <Typewriter
                                words={['Dev Web', 'Dev Front-End', 'Dev Back-End', 'UI/UX']}
                                loop={Infinity}
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={70}
                                delaySpeed={1500}
                            />
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}