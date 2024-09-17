import React from "react";

import Logo_HTML from '../assets/logo-html.png'
import Logo_CSS from '../assets/logo-css.png'
import Logo_JS from '../assets/logo-js.png'
import Logo_Bootstrap from '../assets/logo-bootstrap.png'
import Logo_Tailwind from '../assets/logo-tailwind.png'
import Logo_Python from '../assets/logo-python.png'
import Logo_React from '../assets/logo-react.png'
import Logo_Vue from '../assets/logo-vue.png'
import Logo_MySql from '../assets/logo-mysql.png'
import Logo_PostgreSql from '../assets/logo-postgresql.png'
import Logo_Git from '../assets/logo-git.png'
import Logo_NodeJs from '../assets/logo-nodejs.png'

export default () => {

    return (
        <div id="skills" className="Skills">
            <p>Skills</p>

            <div className="Skills--group">
                <div className='Skills--card toRight'>
                    <div className="Skills-image">
                        <img src={Logo_HTML} alt="Html" />
                    </div>
                    <div className="Skills--name">
                        <p>HTML</p>
                    </div>
                </div>

                <div className='Skills--card toRight'>
                    <div className='Skills-image'>
                        <img src={Logo_CSS} alt="Css" />
                    </div>
                    <div className="Skills--name">
                        <p>CSS</p>
                    </div>
                </div>

                <div className='Skills--card toLeft'>
                    <div className="Skills-image">
                        <img src={Logo_JS} alt="JS" />
                    </div>
                    <div className="Skills--name">
                        <p>JavaScript</p>
                    </div>
                </div>

                <div className='Skills--card toLeft'>
                    <div className="Skills-image">
                        <img src={Logo_Bootstrap} alt="Bootstrap" />
                    </div>
                    <div className="Skills--name">
                        <p>Bootstrap</p>
                    </div>
                </div>

                <div className='Skills--card toRight'>
                    <div className="Skills-image">
                        <img src={Logo_Tailwind} alt="tailwind" />
                    </div>
                    <div className="Skills--name">
                        <p>Tailwind</p>
                    </div>
                </div>

                <div className='Skills--card toLeft'>
                    <div className="Skills-image">
                        <img src={Logo_Python} alt="Python" />
                    </div>
                    <div className="Skills--name">
                        <p>Python</p>
                    </div>
                </div>

                <div className='Skills--card toLeft'>
                    <div className="Skills-image">
                        <img src={Logo_NodeJs} alt="NodeJs" />
                    </div>
                    <div className="Skills--name">
                        <p>Node.Js</p>
                    </div>
                </div>

                <div className='Skills--card toRight'>
                    <div className="Skills-image">
                        <img src={Logo_React} alt="React" />
                    </div>
                    <div className="Skills--name">
                        <p>React</p>
                    </div>
                </div>

                <div className='Skills--card toRight'>
                    <div className="Skills-image">
                        <img src={Logo_Vue} alt="Vue" />
                    </div>
                    <div className="Skills--name">
                        <p>Vue</p>
                    </div>
                </div>

                <div className='Skills--card toLeft'>
                    <div className="Skills-image">
                        <img src={Logo_MySql} alt="MySql" />
                    </div>
                    <div className="Skills--name">
                        <p>MySql</p>
                    </div>
                </div>

                <div className='Skills--card toLeft'>
                    <div className="Skills-image">
                        <img src={Logo_PostgreSql} alt="PostgreSql" />
                    </div>
                    <div className="Skills--name">
                        <p>PostgresSql</p>
                    </div>
                </div>

                <div className='Skills--card toLeft'>
                    <div className="Skills-image">
                        <img src={Logo_Git} alt="Git" />
                    </div>
                    <div className="Skills--name">
                        <p>Git</p>
                    </div>
                </div>
            </div>
        </div>
    )
}