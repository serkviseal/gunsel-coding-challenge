import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Course extends Component {

    getStars(rating) {

        rating = Math.round(rating * 2) / 2;
        let output = [];

        // whole stars
        for (var i = rating; i >= 1; i--)
            output.push(<FontAwesomeIcon icon={['fas', 'star']} fontSize='10' color={'#FFAC04'} />);

        // half stars
        if (i === .5) output.push(<FontAwesomeIcon icon={['fas', 'star-half-alt']} fontSize='10' color={'#FFAC04'} />);

        // empty
        for (let i = (5 - rating); i >= 1; i--)
            output.push(<FontAwesomeIcon icon={['far', 'star']} fontSize='10' color={'#FFAC04'} />);

        return output;

    }

    render() {
        const {
            key,
            title,
            author,
            users,
            rating,
            price,
            comments,
            duration,
            image,
            avatar
        } = this.props;

        return (
            <div className='course-item'>
                <div className='course-background' style={{ backgroundImage: `url(${image})` }}>
                    <img src={avatar} alt={key} />
                </div>
                <div className='details'>
                    <h3>{title}</h3>
                    <h6>{author}</h6>
                    <div className='price-container'>
                        <div className='left'>
                            <h4>${price}</h4>
                        </div>
                        <div>
                            <p>{this.getStars(rating)} {rating}</p>
                        </div>
                    </div>
                </div>
                <div className='info-container'>
                    <ul>
                        <li><FontAwesomeIcon icon={['fas', 'user-friends']} fontSize='10' color={'#83838A'} /> {users}</li>
                        <li><FontAwesomeIcon icon={['far', 'clock']} fontSize='10' color={'#83838A'} /> {duration}</li>
                        <li><FontAwesomeIcon icon={['far', 'comment']} fontSize='10' color={'#83838A'} /> {comments}</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Course
