import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import author1 from './../../../assets/images/testimony-1.png';
import author2 from './../../../assets/images/testimony-2.png';
import author3 from './../../../assets/images/testimony-3.png';
import author4 from './../../../assets/images/testimony-4.png';
import Testimony from './Testimony';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const testimonies = [
    {
        id: 1,
        author: 'Julian Warren',
        author_occupation: 'student',
        author_profile: author1,
        title: 'Awesome Learning Site',
        comment: 'The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked'
    },
    {
        id: 2,
        author: 'Janet Alvarado',
        author_occupation: 'student',
        author_profile: author2,
        title: 'Awesome Learning Site',
        comment: 'A collection of textile samples lay spread out on the table. Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.'
    },
    {
        id: 3,
        author: 'Arthur Watson',
        author_occupation: 'Photographer',
        author_profile: author3,
        title: 'Awesome Learning Site',
        comment: 'What\'s happened to me? he thought. It wasn\'t a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls '
    },
    {
        id: 4,
        author: 'Richardo Wallis',
        author_occupation: 'Developer',
        author_profile: author4,
        title: 'Awesome Learning Site',
        comment: 'The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked'
    }
]

export class Testimonies extends Component {

    constructor(props) {
        super(props)

        this.state = {
            testimonies: testimonies
        }
        this.renderTestimoniesCard = this.renderTestimoniesCard.bind(this);
    }

    renderTestimoniesCard() {
        const { testimonies } = this.state;
        if (testimonies.length !== 0) {
            const testimony = [];
            for (let i = 0; i < testimonies.length; i++) {
                testimony.push(
                    <Testimony
                        key={`testimony-${testimonies[i].id}`}
                        title={testimonies[i].title}
                        author={testimonies[i].author}
                        occupation={testimonies[i].author_occupation}
                        comment={testimonies[i].comment}
                        image={testimonies[i].author_profile}
                    />
                );
            }
            return testimony;
        }
        return <p className="empty-course">No testimonies available at the moment!</p>;
    }


    render() {
        return (
            <div className='testimonies-container'>
                <div className='container'>
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        transitionDuration={500}
                        containerClass="testimonies-carousel-container"
                        removeArrowOnDeviceType={["mobile"]}
                        itemClass="carousel-item-testimony"
                    >
                        {this.renderTestimoniesCard()}
                    </Carousel>
                </div>
            </div>
        )
    }
}

export default Testimonies
