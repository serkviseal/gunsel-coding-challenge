import React, { Component } from 'react';
import Global from '../components/reusable/global';
import FooterBanner from './../components/views/banner/FooterBanner';

export class Home extends Component {
    render() {
        return (
            <Global>
               <FooterBanner />
            </Global>
        )
    }
}

export default Home
