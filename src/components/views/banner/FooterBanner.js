import React, { Component } from 'react';
import banner from './../../../assets/images/banner-background.jpg'

export class FooterBanner extends Component {
    render() {
        return (
            <div className='footer-banner' style={{backgroundImage: `url(${banner})`}}>
                <h2>SIGN UP & GET 65% OFF</h2>
                <p>on New Courses Starts in May</p>
                <button>GET STARTED NOW</button>
            </div>
        )
    }
}

export default FooterBanner
