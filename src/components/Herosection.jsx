import React from 'react'
import { Container } from 'react-bootstrap'
import Pagenav from './Pagenav'
import { Pagestar } from '../commonicon/Icon'
import elipse1 from "../assets/images/elipse.webp";

const Herosection = () => {
  return (
    <div className=' herobg min-vh-100 d-flex flex-column position-relative' id="home">
      <img src={elipse1} alt="elipse" className=' position-absolute elipse-size elipse1' />
        <div className=' position-relative z-11'>
    <Pagenav/>
    </div>
    <Container className=' d-flex  flex-grow-1  flex-column justify-content-center  position-relative z-2'>
        <div className=' max-w-584'>
<p className=' d-flex  align-items-center ff-exo fw-normal fs-sm lh-24 mb-0 gap-6  '>
    <span><Pagestar/></span>
   <span> AI With Noble Mind</span>
</p>
<h1 className=' ff-outfit fw-light fs-1lg lh-76 mt-2  mb-3 '>Inspiring Innovation, Elevating Solutions –  <span className=' lh-57 fw-semibold fs-lg '>Noble Mind" </span></h1>
<p className=' ff-exo lh-24 fs-sm fw-normal opacity-70 mb-0'>At Noble Mind is a forward-thinking AI specialised company dedicated to reshaping the future of how we live, work, and learn. Our mission is to create ground-breaking AI solutions for Healthcare, Education, and beyond, aligning with Saudi Arabia’s Vision 2030.”</p>
</div>
    </Container>
    </div>
  )
}

export default Herosection