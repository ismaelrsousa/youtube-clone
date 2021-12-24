import React from 'react';

import './style.css';

import logo from '../../img/logo.svg';
import bell from '../../img/icons/bell.svg';
import search from '../../img/icons/search.svg';
import video from '../../img/icons/camera.svg';
import menu from '../../img/icons/menu.svg';
import bars from '../../img/icons/bars.svg';

function Topbar(){
    return(
        <div className="top-bar">

            <div className="left">
                <div className="menu">
                    <img src={bars} alt="" className="icon"/>
                </div>

                <a href="/" className="logo-container">
                    <img src={logo} alt="" className="logo"/>
                </a>
            </div>

            <form className="search">
                <input type="text" name="s" className="input" placeholder="Pesquisar"/>

                <button type="submit" className="submit">
                    <img src={search} alt="" className="icon"/>
                </button>
            </form>

            <div className="right">

                <div className="new-video item">
                    <img src={video} alt="" className="icon"/>
                </div>

                <div className="menu item">
                    <img src={menu} alt="" className="icon"/>
                </div>

                <div className="notifications item">
                    <img src={bell} alt="" className="icon"/>
                </div>

                <div className="item profile">
                    I
                </div>

            </div>

        </div>
    );
}

export default Topbar;