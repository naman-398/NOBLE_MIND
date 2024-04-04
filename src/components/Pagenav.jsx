import React, { useState } from 'react'
import pagelogo from "../assets/images/pagelogo.webp";
import { Container } from 'react-bootstrap';
import { Navcross, Navline } from '../commonicon/Icon';
import Buttoncommon from '../Commonbtn/Buttoncommon';
const Pagenav = () => {
    const [first, setfirst] = useState(false)
    function show() {
        setfirst(!first)  
        if (first === false) {
          document.body.classList.add('overflow_hidden')
        }
        else {
          document.body.classList.remove('overflow_hidden')
        }
    }
  return (
    <div>
         <Container className=' py-4 w-100   '>
            <div className=' d-flex  align-items-center  justify-content-between '>
<img src={pagelogo} alt="" className=' navimg cursor-pointer' />
<div className= "d-flex  align-items-center  mb-0  ps-0 gap-4" >
<ul className={`${first ? "nav-true" : "nav-false"} d-flex  align-items-center  mb-0  ps-0 gap-4  mobile-view w-100 `}>
    <li><a href="#home" onClick={show} className=' opacity-70  ff-exo fs-sm fw-normal  lh24 page-black  mb-0  pagelinks '>Home</a></li>
    <li><a href="#us" onClick={show} className=' opacity-70  ff-exo fs-sm fw-normal  lh24 page-black  mb-0  pagelinks  '>About Us</a></li>
    <li><a href="#contact" onClick={show} className=' opacity-70  ff-exo fs-sm fw-normal  lh24 page-black  mb-0  pagelinks  '>Services</a></li>
    <li><a href="#why" onClick={show} className=' opacity-70  ff-exo fs-sm fw-normal  lh24 page-black  mb-0  pagelinks  '>Why Choose Us</a></li>
    <li><a href="#rm" onClick={show} className=' opacity-70  ff-exo fs-sm fw-normal  lh24 page-black  mb-0  pagelinks  '>Blogs</a></li>
    <li><a href="#faq" onClick={show} className=' opacity-70  ff-exo fs-sm fw-normal  lh24 page-black  mb-0  pagelinks  '>FAQ</a></li>
  <span className=' d-block  d-sm-none '><Buttoncommon text="Contact&nbsp;Us"/></span>
</ul>
  <span className=' d-none  d-sm-block '><Buttoncommon text="Contact&nbsp;Us"/></span>
</div>
<span onClick={show} className=' d-block d-lg-none position-relative z-11'>{first === false ? <Navline/>: <Navcross/>}</span>
</div>
        </Container>
    </div>
  )
}

export default Pagenav