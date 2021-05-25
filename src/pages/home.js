import React, { Component } from 'react';
import Global from '../components/reusable/global';
import HeaderBanner from './../components/views/banner/HeaderBanner';
import FooterBanner from './../components/views/banner/FooterBanner';

export class Home extends Component {
    render() {
        return (
            <Global>
                <HeaderBanner />
                <FooterBanner />
            </Global>
        )
    }
}

export default Home
