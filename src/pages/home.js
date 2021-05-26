import React, { Component } from 'react';
import Global from '../components/reusable/global';
import HeaderBanner from './../components/views/banner/HeaderBanner';
import FooterBanner from './../components/views/banner/FooterBanner';
import Courses from '../components/views/courses/Courses';
import TopCourses from '../components/views/courses/TopCourses';
import Services from '../components/views/services/Services';


export class Home extends Component {
    render() {
        return (
            <Global className="home-page">
                <HeaderBanner />
                <Services />
                <Courses />
                <TopCourses />
                <FooterBanner />
            </Global>
        )
    }
}

export default Home
