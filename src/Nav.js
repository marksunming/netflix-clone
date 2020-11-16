import React, { useEffect, useState } from 'react';
import "./Nav.css";

function Nav() {

    const [show,handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        })
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])



    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" 
                alt="Netflix Logo"
                className="nav__logo"
            />
            <img 
                className="nav__avatar"
                src="https://twirpz.files.wordpress.com/2015/06/twitter-avi-gender-balanced-figure.png?w=640" 
                alt="Nav Avatar"
            />
        </div>
    )
}

export default Nav
