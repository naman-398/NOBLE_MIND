import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import footerlogo from "../assets/images/footerlogo.webp";
import { Facebook, Instagram, Linkedin, Twitter } from '../commonicon/Icon';
const Footer = () => {
    return (
        <div className='footerbg'>
            <Container>
                <Row className=' justify-content-between '>
                    <Col md={4} className=' col-12'>
                        <img src={footerlogo} alt="footerlogo" className=' footerlogo cursor-pointer mb-sm-4 mb-2 d-flex mx-auto mx-md-0' />
                        <p className=' ff-exo fw-normal fs-sm text-white lh-24 mb-2 text-center text-md-start'>Follow Us</p>
                        <div className=' d-flex gap-sm-3 gap-2 align-items-center justify-content-center justify-content-md-start'>
<a href="https://www.facebook.com/" target='_blank' className=' footericon'><Facebook/></a>
<a href="https://www.instagram.com/" target='_blank' className=' footericon'><Instagram/></a>
<a href="https://twitter.com/login?lang=en" target='_blank' className=' footericon'><Twitter/></a>
<a href="https://www.linkedin.com/feed/" target='_blank' className=' footericon'><Linkedin/></a>
                        </div>
                    </Col>
                    <Col lg={5} md={6}  className=' col-12 mt-3 mt-md-0'>
<Row>
    <Col className=' col-6 d-flex flex-column justify-content-center align-items-center'>
    <ul className=' d-flex flex-column gap-sm-3 gap-2 mb-0'>
                            <li><span className='ff-outfit fw-semibold fs-sm lh-24 text-white'>Maine</span></li>
                            <li className=' mtminus2'> <a href="#home" className='ff-exo fw-semibold fs-sm lh-24 page-white opacity-70 footerlinks position-relative'>Home</a></li>
                            <li className=' mtminus2'><a href="#us" className='ff-exo fw-semibold fs-sm lh-24 page-white opacity-70 footerlinks position-relative'>About Us</a></li>
                            <li className=' mtminus2'><a href="#contact" className='ff-exo fw-semibold fs-sm lh-24 page-white opacity-70 footerlinks position-relative'>services</a></li>
                            <li className=' mtminus2'><a href="#why" className='ff-exo fw-semibold fs-sm lh-24 page-white opacity-70 footerlinks position-relative'>Why Choose Us</a></li>
                        </ul>
</Col>
    <Col className=' col-6 d-flex flex-column justify-content-center align-items-center'>
    <ul className=' d-flex flex-column gap-sm-3 gap-2 mb-0'>
                            <li><span className='ff-outfit fw-semibold fs-sm lh-24 text-white'>Legal</span></li>
                            <li className=' mtminus2'> <span className='ff-exo fw-semibold fs-sm lh-24 page-white opacity-70 footerlinks position-relative'>Term & Conduction</span></li>
                            <li className=' mtminus2'><span className='ff-exo fw-semibold fs-sm lh-24 page-white opacity-70 footerlinks position-relative'>Privacy Policy</span></li>
                            <li className=' mtminus2'><a href="#contact" className='ff-exo fw-semibold fs-sm lh-24 page-white opacity-70 footerlinks position-relative'>Contact</a></li>
                            <li className=' mtminus2'><a href="tel:7404215521" className='ff-exo fw-semibold fs-sm lh-24 page-white opacity-70 footerlinks position-relative'>(629) 555-0129</a></li>
                        </ul>
</Col>
</Row>     
                    </Col>
                </Row>
            </Container>
            <hr  className=' footerline'/>
            <p className=' ff-exo fw-normal text-center text-white mb-0 footer-btm-para'>© Copyright 2024 Noble Mind | All rights reserved. </p>
        </div>
    )
}

export default Footer