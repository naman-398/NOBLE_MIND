import React, { useState } from 'react';
import Slider from 'react-slick';
import sliderbigimg from "../assets/images/sliderbigimg.webp";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Container } from 'react-bootstrap';
import { Pagestar } from '../commonicon/Icon';
import sliderimg from "../assets/images/sliderimg.webp";
import elipse3 from "../assets/images/elipse.webp";
const Whychooseus = () => {
    const [centerSlideIndex, setCenterSlideIndex] = useState(1);

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speedAutoplay: 0,
        centerMode: true,
        centerPadding: '20px',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                }
            },
        ],
        afterChange: (currentSlideIndex) => {
            setCenterSlideIndex((currentSlideIndex + 1) % 3);
        }
    };

    const renderSliderCard = (index) => {
        const cardProps = [
            {
                title: 'Customer-Centric',
                content: 'Prioritize and anticipate client needs, ensuring our technology solutions consistently deliver unparalleled value.',
            },
            {
                title: 'Workplace Harmony',
                content: 'Create a nurturing and peaceful environment for our staff, fostering growth, well-being, and unity. We are more than a team; we are a family.',
            },
            {
                title: 'Ethical Leadership',
                content: 'Maintain the highest standards in all practices, ensuring our solutions are responsible, safe, and transparent.',
            },
        ];

        const isCenter = index === centerSlideIndex;

        return (
            <div key={index} className=' px-2 h-100 min-h-208' data-aos="zoom-in">
                <div className={`slider-card w-100 h-100 mx-auto overflow-hidden position-relative z-1  ${isCenter ? 'centered-card' : ''}`}>
                    <div className='slider-cricle1 d-flex align-items-center justify-content-center fw-bold ff-outfit mb-0'>{index + 1}</div>
                    <p className='ff-outfit fs-md fw-normal lh-25 page-black mt-11 mb-1'>{cardProps[index].title}</p>
                    <p className='ff-exo fw-normal fs-sm lh-24 page-black opacity-70 mb-0 slider-para'>{cardProps[index].content}</p>
                    <span>
                        <img src={sliderimg} alt="slider" className='d_NONE position-absolute start-0 bottom-0' />
                    </span>
                </div>
            </div>
        );
    };
  
    return (
        <div className=' section-between-padding position-relative' id="why">
      <img src={elipse3} alt="elipse" className=' position-absolute elipse-size elipse3' />
      <img src={elipse3} alt="elipse" className=' position-absolute elipse-size elipse4' />
            <Container>
                <p className='d-flex align-items-center ff-exo fw-normal fs-sm lh-24 mb-0 gap-6 justify-content-center' data-aos="zoom-in">
                    <span><Pagestar /></span>
                    <span> Why Choose Us</span>
                </p>
                <h2 className='fs-lg lh-57 ff-outfit fw-light mt-sm-2 mt-1 mb-sm-3 mb-2 text-center' data-aos="zoom-in">Driving Innovation & <span className='fw-bolder d-block'>Transforming Industries</span></h2>
                <Slider {...settings} className=' slider-mt'>
                    {Array.from({ length: 3 }, (_, i) => renderSliderCard(i))}
                </Slider>
                <div className=' sliderimg-card overflow-hidden' data-aos="zoom-in">
<img src={sliderbigimg} alt="sliderbigimg" className=' w-100 h-100 slider-bigimg' />
                </div>
            </Container>
        </div>
    );
};

export default Whychooseus;
