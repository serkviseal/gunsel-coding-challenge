import React, { Component } from 'react'

export class Testimony extends Component {
    render() {
        const { key, author, occupation, comment, title, image } = this.props;
        return (
            <div>
                <div className='author-info'>
                    <img src={image} alt={key} />
                    <h3>{author}-<span>{occupation}</span></h3>
                </div>
                <div className='testimony'>
                    <h3>{title}</h3>
                    <p>{comment}</p>
                </div>
            </div>
        )
    }
}

export default Testimony
