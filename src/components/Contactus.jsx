import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Buttoncommon from '../Commonbtn/Buttoncommon'
import contactus from "../assets/images/contactus.webp";
const Contactus = () => {
    const checkboxRef = useRef(null);
    const [Fromdata, setFromdata] = useState({
        name: "",
        lastname: "",
        message: "",
        email: "",
    });
    const [Errordata, setErrordata] = useState({
        name: "",
        lastname: "",
        message: "",
        email: "",
    });
    const [modal, setmodal] = useState(false);
    const submission = (e) => {
        const { name, value } = e.target;
        setFromdata({ ...Fromdata, [name]: value });
    };
    const handelsubmit = (e) => {
        e.preventDefault();
        const regex = {
            name: /^[a-zA-Z\s]+$/,
            lastname: /^[a-zA-Z\s]+$/,
            message: /^(?:(?:(?:(?:(?:\w+\.?\s?)+,?\s?)+)?(?:\w+\.?\s?)+)?\s*:\s*)?(?:.+)$/,
            email: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
        };
        const error = {};
        if (!regex.name.test(Fromdata.name)) {
            error.name = "invalid name !!";
        }
        if (!regex.lastname.test(Fromdata.lastname)) {
            error.lastname = "invalid lastname !!";
        }
        if (!regex.message.test(Fromdata.message)) {
            error.message = "write message !!";
        }
        if (!regex.email.test(Fromdata.email)) {
            error.email = "invalid email !!";
        }

        setErrordata(error);
        if (Object.keys(error).length === 0) {
            setmodal(true);
            setErrordata({
                name: "",
                lastname: "",
                message: "",
                email: "",
            })
            setFromdata({
                name: "",
                lastname: "",
                message: "",
                email: "",
            })
            console.log(Fromdata)

        }
    };
    if (modal ) {
        document.body.classList.add('overflow-hidden')
      }
      else  {
        document.body.classList.remove('overflow-hidden')
      }
    return (
        <div className=' section-between-padding' id="contact">
            <Container>
                <Row className=' align-items-center '>
                    <Col lg={6} className=' col-12 '>
                        <h2 className='fs-lg lh-57 ff-outfit fw-bolder mb-sm-3 mb-2 text-center text-lg-start' data-aos="zoom-in">Contact <span className='fw-light'>Us</span></h2>
                        <p className=' ff-exo lh-24 fs-sm fw-normal opacity-70 mb-sm-3 mb-2 text-center text-lg-start' data-aos="zoom-in">Feel free to contact us any time . We will get back to you <span className=' d-sm-block'> as soon as we can! </span></p>
                        <form onSubmit={handelsubmit} className=' max-w-478 mx-auto mx-lg-0'>
                            <div className=' d-flex gap-11 flex-column flex-sm-row' data-aos="zoom-in">
                                <div className=" d-flex flex-column w-100 ">
                                    <label className=" ff-exo fw-normal fs-sm lh-24 opacity-70 page-black ">
                                        Name
                                    </label>
                                    <div>
                                        <input
                                            onChange={submission}
                                            type="name"
                                            name="name"
                                            value={Fromdata.name}
                                            className=" input-box w-100 px-1 "
                                        />
                                        {Errordata.name && (
                                            <p className="text-danger pt-1 mb-0">{Errordata.name}</p>
                                        )}
                                    </div>
                                </div>
                                <div className=" d-flex flex-column w-100 ">
                                    <label className=" ff-exo fw-normal fs-sm lh-24 opacity-70 page-black ">
                                        Last Name
                                    </label>
                                    <div>
                                        <input
                                            onChange={submission}
                                            type="name"
                                            name="lastname"
                                            value={Fromdata.lastname}
                                            className=" input-box w-100  px-1 "
                                        />
                                        {Errordata.lastname && (
                                            <p className="text-danger pt-1 mb-0">
                                                {Errordata.lastname}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className=" d-flex flex-column mt-sm-3 mt-2 " data-aos="zoom-in">
                                <label className=" ff-exo fw-normal fs-sm lh-24 opacity-70 page-black ">
                                    Email
                                </label>
                                <div>
                                    <input
                                        onChange={submission}
                                        type="email"
                                        name="email"
                                        value={Fromdata.email}
                                        className=" input-box2 w-100 px-1  "
                                    />
                                    {Errordata.email && (
                                        <p className="text-danger pt-1 mb-0">{Errordata.email}</p>
                                    )}
                                </div>
                            </div>
                            <div className=" d-flex flex-column mt-sm-3 mt-2 " data-aos="zoom-in">
                                <label className=" ff-exo fw-normal fs-sm lh-24 opacity-70 page-black ">
                                    Message
                                </label>
                                <div>
                                    <textarea
                                        onChange={submission}
                                        type="message"
                                        name="message"
                                        value={Fromdata.message}
                                        className=" input-box3 w-100 p-1  "
                                    ></textarea>
                                    {Errordata.message && (
                                        <p className="text-danger pt-1 mb-0">{Errordata.message}</p>
                                    )}
                                </div>
                            </div>
                            <div className=' pt-sm-4 pt-2' data-aos="zoom-in"><Buttoncommon text="Submit" /></div>
                        </form>
                    </Col>
                    <Col lg={6} className=' col-12 mt-sm-4 mt-3 mt-lg-0'>
                        <div className=' contactus-imgcard ms-lg-auto mx-auto overflow-hidden' data-aos="zoom-in">
                            <img src={contactus} alt="contactus" className=' w-100 h-100 contactus-img' />
                        </div>
                    </Col>
                </Row>
            </Container>
            {modal && <div className=' h-100 w-100 min-vh-100 min-vw-100 position-fixed top-0 start-0 d-flex justify-content-center align-items-center  modal_box p-4' onClick={()=> setmodal(false) }>
      <div className=' submitbox w-100 h-100 d-flex justify-content-center align-items-center position-relative p-4'  >
        <span className=' position-absolute modalsvg ' onClick={()=> setmodal(false) }><svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="#FFFFFF" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg></span>
        <p className=' text-white fs-md text-center ff-exo ' >
            IN SHORT TIME OUR TEAM CONTACT YOU
        </p>
        </div>
        </div>}
        </div>
    )
}

export default Contactus