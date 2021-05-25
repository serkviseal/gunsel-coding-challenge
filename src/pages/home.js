import React, { Component } from 'react';
import Global from '../components/reusable/global';
import HeaderBanner from './../components/views/banner/HeaderBanner';
import FooterBanner from './../components/views/banner/FooterBanner';
import business from './../assets/images/business.png';
import computer from './../assets/images/computer.png';
import science from './../assets/images/science.png';
import music from './../assets/images/music.png';
import photography from './../assets/images/photography.png';
import culinary from './../assets/images/culinary.png';

export class Home extends Component {
    render() {
        return (
            <Global className="home-page">
                <HeaderBanner />
                <div className='container home'>
                    <div>
                        <div className='service-icon-container'>
                            <img src={business} alt='business' />
                        </div>
                        <h3>Business</h3>
                        <p>Drops of rain could be heard hitting the pane, which made him feel quite sad. How about if I sleep a little bit longer and forget all this nonsense</p>
                    </div>
                    <div>
                        <div className='service-icon-container'>
                            <img src={computer} alt='computer' />
                        </div>
                        <h3>Computer & IT</h3>
                        <p>He threw himself onto his right and rolled back to where he was. He must have tried it hundred times, shut his eyes so that wouldn't to look</p>
                    </div>
                    <div>
                        <div className='service-icon-container'>
                            <img src={science} alt='science' />
                        </div>
                        <h3>Science</h3>
                        <p>At the floundering legs, he looks and only stopped when he began to feel a mild, dull pain there thet he had never felt before</p>
                    </div>
                    <div>
                        <div className='service-icon-container'>
                            <img src={music} alt='music' />
                        </div>
                        <h3>Music</h3>
                        <p>Doing business like this takes much more effort than doing your own business at home, and on top of that there's the curse of travelling</p>
                    </div>
                    <div>
                        <div className='service-icon-container'>
                            <img src={photography} alt='photography' />
                        </div>
                        <h3>Photography</h3>
                        <p>He worries about making train connections and irregular food, contact with different people all tthe time so that you or anyone become friendly</p>
                    </div>
                    <div>
                        <div className='service-icon-container'>
                            <img src={culinary} alt='culinary' />
                        </div>
                        <h3>Culinary</h3>
                        <p>It can all go to Hell. He felt a slight itch up on his belly, pushed himself up on his back towards the headboard so that he lift his head better</p>
                    </div>
                </div>
                <FooterBanner />
            </Global>
        )
    }
}

export default Home
