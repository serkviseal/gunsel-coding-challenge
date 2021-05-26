import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
//Todo: implement own carousel functionality
import fetch from "isomorphic-unfetch";
import LoadContent from './../../reusable/LoadContent';
import Course from './Course';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export class Courses extends Component {

    constructor(props) {
        super(props)

        this.state = {
            courses: [],
            isLoading: true,
        }
        this.renderCoursesCard = this.renderCoursesCard.bind(this);
    }

    componentDidMount() {
        this.retrieveCourses();
    }


    retrieveCourses() {
        fetch(`https://5ea5cbca2d86f00016b46276.mockapi.io/api/courses`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
            .then(async res => {
                try {
                    const response = await res.json();
                    if (Array.isArray(response)) {
                        this.setState({
                            isLoading: false,
                            courses: response
                        });
                    }
                    if (!Array.isArray(response)) {
                        console.log("error", response);
                    }
                } catch (err) {
                    console.log("error", err);
                    this.setState({
                        isLoading: false
                    });
                }
            })
            .catch(err => {
                console.log("error", err);
                this.setState({
                    isLoading: false
                });
            });
    }

    renderCoursesCard() {
        const { courses, isLoading } = this.state;
        if (courses.length !== 0 && !isLoading) {
            const course = [];
            for (let i = 0; i < courses.length; i++) {
                course.push(
                    <Course
                        key={`course-${courses[i].id}`}
                        title={courses[i].title}
                        author={courses[i].author}
                        users={courses[i].users}
                        rating={courses[i].rating}
                        price={courses[i].price}
                        comments={courses[i].comments}
                        duration={courses[i].duration}
                        image={courses[i].image}
                        avatar={courses[i].author_avatar}
                    />
                );
            }
            return course;
        }
        if (courses.length === 0 && !isLoading) {
            return <p className="empty-course">No courses available at the moment!</p>;
        }
        return <LoadContent />;
    }

    render() {
        return (
            <div className='courses-container'>
                <div className='container'>
                    <h2>POPULAR COURSES</h2>
                    <h4>Donec rutrum congue leo eget malesuada</h4>
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        keyBoardControl={true}
                        transitionDuration={500}
                        containerClass="courses-carousel-container"
                        removeArrowOnDeviceType={["mobile"]}
                        itemClass="carousel-item-course"
                    >
                        {this.renderCoursesCard()}
                    </Carousel>
                </div>
            </div>
        )
    }
}

export default Courses
