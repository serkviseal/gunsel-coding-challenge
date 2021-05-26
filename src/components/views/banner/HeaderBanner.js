import React, { Component } from 'react';
import banner from './../../../assets/images/banner-background.jpg'

export class HeaderBanner extends Component {
    render() {
        return (
            <div className='header-banner' style={{ backgroundImage: `url(${banner})` }}>
                <h5>LEARN ON DEMAND</h5>
                <h2>LEARN FROM THE BEST OF BEST</h2>
                <div className='container'>
                    <div>
                        <h4>Fresh Content</h4>
                        <p>It showed a lady fitted out with a fur hat and fur boa who sat upright</p>
                    </div>
                    <div>
                        <h4>Trusted Instructors</h4>
                        <p>Raising a heavy fur muff, covered the whole lower arm towards the viewer</p>
                    </div>
                    <div>
                        <h4>Flexible Learning</h4>
                        <p>Gregor then turned to look out the window at the dull weather</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderBanner
