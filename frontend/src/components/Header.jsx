import React from 'react';
import '../styles/header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='title'>
                <h1>MAX[i]</h1>
            </div>
            <nav className='navbar'>
                <ul>
                    <li><a href='home'>Inicio</a></li>
                    <li><a href='about'>Sobre mi</a></li>
                    <li><a href='contact'>Contacto</a></li>
                </ul>
            </nav>
            <div className='background-nav'></div>
            <div className='background-nav2'></div>
        </div>
    );
}

export default Header;
