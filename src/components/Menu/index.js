import React from 'react';

import './style.css';

import logo from '../../img/logo.svg';
import bars from '../../img/icons/bars.svg';
import home from '../../img/icons/home.svg';

import pic from '../../img/pic.jpg';

function Menu(){
    return(
        <div className="left-menu">

            <div className="top">
                <div className="menu">
                    <img src={bars} alt="" className="icon"/>
                </div>

                <a href="/" className="logo-container">
                    <img src={logo} alt="" className="logo"/>
                </a>
            </div>

            <div className="content">

                <div className="item active">
                    <a href="#" className="link">
                        <div className="icon-container">
                            <img src={home} alt="" className="icon"/>
                        </div>
                        Inicio
                    </a>
                </div>

                <div className="item">
                    <a href="#" className="link">
                        <div className="icon-container">
                            <img src={home} alt="" className="icon"/>
                        </div>
                        Histórico
                    </a>
                </div>

                <hr/>

                <div className="title">Inscrições</div>

                <div className="item has-notification">
                    <a href="#" className="link">
                        <div className="icon-container circle">
                            <img src={pic} alt="" className="pic"/>
                        </div>
                        Gustavo Cunha
                    </a>
                </div>

            </div>

        </div>  
    );
}

export default Menu;