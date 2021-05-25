import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faFacebook, faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from './../../assets/images/footer-logo.png';
import Footer1 from './../../assets/images/footer-1.jpg';
import Footer2 from './../../assets/images/footer-2.jpg';
import Footer3 from './../../assets/images/footer-3.jpg';

/*
this is the component for the bottom footer. 
*/
export class Footer extends Component {

    getYear() {
        return new Date().getFullYear();
    }

    render() {
        return (
            <div className='footer-container'>
                <div className='top-background'>
                    <div className='container'>
                        <div className='detail-container'>
                            <img src={logo} alt='footer-logo' />
                            <p>We are a team of different geeks that bellieve in producing top-quality courses and category based on best videos.</p>
                            <ul className='info'>
                                <li>
                                    <FontAwesomeIcon icon={['fas', 'phone-square-alt']} fontSize='10' color={'#83838A'} />{'  '}089 055648 05408
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={['fas', 'envelope-square']} fontSize='10' color={'#83838A'} />{'  '}info@courseware.com
                                </li>
                            </ul>


                            <ul className='social'>
                                <li>
                                    <FontAwesomeIcon icon={['fab', 'facebook-f']} fontSize='10' color={'#83838A'} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={['fab', 'twitter']} fontSize='10' color={'#83838A'} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={['fas', 'newspaper']} fontSize='10' color={'#83838A'} />
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={['fab', 'youtube']} fontSize='10' color={'#83838A'} />
                                </li>
                            </ul>
                        </div>
                        <div className='links-container'>
                            <h3>QUICK LINKS</h3>
                            <ul>
                                <li>Courses</li>
                                <li>Events</li>
                                <li>About Us</li>
                                <li>Gallery</li>
                                <li>Become a Teacher</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className='news-container'>
                            <h3>NEWS</h3>
                            <ul>
                                <li>
                                    <div className='single-news-container'>
                                        <img src={Footer1} alt='footer-1' />
                                    </div>
                                    <div className='single-news-container'>
                                        <h5>Guide to WordPress Custom Post Type</h5>
                                        <p><FontAwesomeIcon icon={['far', 'comment']} fontSize='10' color={'#83838A'} /> 23 comments</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='single-news-container'>
                                        <img src={Footer2} alt='footer-2' />
                                    </div>
                                    <div className='single-news-container'>
                                        <h5>Guide to WordPress Custom Post Type</h5>
                                        <p><FontAwesomeIcon icon={['far', 'comment']} fontSize='10' color={'#83838A'} /> 23 comments</p>
                                    </div>
                                </li>
                                <li><
                                    div className='single-news-container'>
                                    <img src={Footer3} alt='footer-3' />
                                </div>
                                    <div className='single-news-container'>
                                        <h5>Guide to WordPress Custom Post Type</h5>
                                        <p><FontAwesomeIcon icon={['far', 'comment']} fontSize='10' color={'#83838A'} /> 23 comments</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='support-container'>
                            <h3>SUPPORT</h3>
                            <ul>
                                <li>FAQ</li>
                                <li>Documentation</li>
                                <li>Forums</li>
                                <li>Career</li>
                                <li>Community</li>
                                <li>Management</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='footer-background'>
                    <div className='container'>
                        <div className='left-container'>
                            <p>Copyright © {this.getYear()} Courseware. All rights reserved</p>
                        </div>
                        <div>
                            <ul>
                                <li >
                                    Privacy
                                </li>
                                <li >
                                    Terms
                                </li>
                                <li >
                                    Sitemap
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
