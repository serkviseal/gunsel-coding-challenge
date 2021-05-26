import React, { Component } from 'react'
import beginner from './../../../assets/images/beginner-to-pro.jpg';
import python from './../../../assets/images/phyton-master-class.jpg';
import javascript from './../../../assets/images/ultimate-path-to-js.jpg';
import wordpress from './../../../assets/images/wordpress-expert.jpg';

export class TopCourses extends Component {
    render() {
        return (
            <div className='container top-courses-container'>
                <h2>TOP COURSES</h2>
                <h4>Donec rutrum congue leo eget malesuada</h4>
                <div className='course-grid-container'>
                    <div className='parent-grid menu-grid'><div className=" child-grid" style={{ backgroundImage: `url(${wordpress})` }}><h2>BECOME A WORDPRESS EXPERT</h2></div></div>
                    <div className='parent-grid main-grid'><div className=" child-grid" style={{ backgroundImage: `url(${python})` }}><h2>COMPLETE PYTHON MASTERCLASS</h2></div></div>
                    <div className='parent-grid right-grid'><div className=" child-grid" style={{ backgroundImage: `url(${beginner})` }}><h2>BEGINNER TO PRO IN EXCEL</h2></div></div>
                    <div className='parent-grid footer-grid'><div className=" child-grid" style={{ backgroundImage: `url(${javascript})` }}><h2>THE ULTIMATE COURSE TO BECOME JAVASCRIPT NINJA</h2></div></div>
                </div>
                <button>BROWSE ALL</button>
            </div>
        )
    }
}

export default TopCourses
