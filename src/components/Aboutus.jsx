import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import s2img from "../assets/images/s2img1.webp";
import { Pagestar } from '../commonicon/Icon';
import Buttoncommon from '../Commonbtn/Buttoncommon';
import elipse2 from "../assets/images/elipse.webp";

const Aboutus = () => {
  return (
    <div className=' section-between-padding position-relative' id="us" >
      <img src={elipse2} alt="elipse" className=' position-absolute elipse-size elipse2' />
        <Container>
<Row className=' align-items-center '>
<Col lg={6} className=' col-12 '>
<div className=' s2-img-card overflow-hidden me-lg-auto mx-auto ' data-aos="zoom-in">
<img src={s2img} alt="s2img" className=' s2-img w-100  h-100 ' />
</div>
</Col>
<Col lg={6} className=' col-12 mt-lg-0  mt-sm-4 mt-3  '>
  <div className=' ms-lg-auto max-w-521 mx-auto'>
<p className=' d-flex  align-items-center ff-exo fw-normal fs-sm lh-24 mb-0 gap-6 justify-content-center  justify-content-lg-start ' data-aos="zoom-in">
    <span><Pagestar/></span>
   <span> About us</span>
</p>
<h2 className=' fs-lg lh-57 ff-outfit fw-light  mt-sm-2 mt-1 mb-sm-3 mb-2 max-w-521 text-center mx-auto  text-lg-start  mx-lg-0 ' data-aos="zoom-in">Pioneering Vision & Mission- <span className=' fw-bolder '>Driven Sectoral Innovation</span></h2>
<p className=' ff-exo lh-24 fs-sm fw-normal opacity-70 mb-0 max-w-491 text-center mx-auto  text-lg-start  mx-lg-0 ' data-aos="zoom-in">Imagine a future in Saudi Arabia influenced by the potential of Al, with Noble Mind at the forefront of this transformation. Healthcare stands to gain with the promise of enhanced data precision. In education, there's the potential for individualized learning experiences. Finance could witness seamless transactions, and entertainment may revel in customized experiences. Through Al's promise, transportation could innovate and cities might adapt smarter infrastructures. In every domain, the vision of Noble Mind hints at a brighter, more efficient nation.</p>
<div className=' s2-btn-mt text-center  text-lg-start ' data-aos="zoom-in"><Buttoncommon text="Read More"/></div>
</div>
</Col>
</Row>
        </Container>
    </div>
  )
}

export default Aboutus