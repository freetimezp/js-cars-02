/* eslint-disable no-unused-vars */
import { useState } from 'react';

import './Navbar.css';

import Logo from '../../Assets/images/logo.png';

import { IoIosCloseCircle } from 'react-icons/io';
import { TbGridDots } from 'react-icons/tb';

const Navbar = () => {
    const [navbar, setNavbar] = useState('navbar');

    const showNavbar = () => {
        setNavbar('navbar showNavbar');
    };

    const removeNavbar = () => {
        setNavbar('navbar');
    };

    return (
        <div className='header'>
            <div className="logoDiv">
                <img src={Logo} alt="logo" className='logo' />
            </div>

            <div className={navbar}>
                <ul className="menu">
                    <li className="listItem" onClick={removeNavbar}>
                        <a href="/" className="link">Used Cars</a>
                    </li>
                    <li className="listItem" onClick={removeNavbar}>
                        <a href="/" className="link">New Cars</a>
                    </li>
                    <li className="listItem" onClick={removeNavbar}>
                        <a href="/" className="link">Auction</a>
                    </li>
                    <li className="listItem" onClick={removeNavbar}>
                        <a href="/" className="link">Sell</a>
                    </li>
                </ul>

                <IoIosCloseCircle className='icon closeIcon' onClick={removeNavbar} />
            </div>

            <div className="signUp flex">
                <div className="text">Sign Up</div>
                <TbGridDots className='icon toggleNavbarIcon' onClick={showNavbar} />
            </div>
        </div>
    );
}

export default Navbar;
