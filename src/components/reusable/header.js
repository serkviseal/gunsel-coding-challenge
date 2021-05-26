import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from './../../assets/images/header-logo.png';

/*
this is the component for the top panel header. 
*/
export class Header extends Component {
    render() {
        return (
            <div className='header-container'>
                <div className='top-background'>
                    <div className='container'>
                        <div className='left-container'>
                            <ul>
                                <li >
                                    <FontAwesomeIcon icon={faPhone} fontSize='10' color={'#83838A'} /> (+90) 54847 231
                                </li>
                                <li >
                                    <FontAwesomeIcon icon={faEnvelope} fontSize='10' color={'#83838A'} /> support@courseware.com
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li >
                                    myCourseware
                                </li>
                                <li >
                                    Cart <FontAwesomeIcon icon={faShoppingCart} fontSize='10' color={'#83838A'} />
                                </li>
                                <li >
                                    Search <FontAwesomeIcon icon={faSearch} fontSize='10' color={'#83838A'} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='menu-container'>
                    <div className='container'>
                        <div className='left-container'>
                            <img src={logo} alt='header-logo' />
                        </div>
                       
                        <div class="topnav">
                            <a class="active" href="#home">Demos</a>
                            <a href="#news">Courses</a>
                            <a href="#contact">Instructors</a>
                            <a href="#about">Blog</a>
                            <a href="#about">Pages</a>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Header
