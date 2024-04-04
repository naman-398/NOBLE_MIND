import React from 'react';
import { Container } from 'react-bootstrap';
import elipse5 from "../assets/images/elipse.webp";

const Faq = () => {
    return (
        <div className='section-between-padding position-relative' id="faq">
            <img src={elipse5} alt="elipse" className=' position-absolute elipse-size elipse5' />
            <img src={elipse5} alt="elipse" className=' position-absolute elipse-size elipse6' />
            <img src={elipse5} alt="elipse" className=' position-absolute elipse-size elipse7' />
            <Container>
                <h2 className='fs-lg lh-57 ff-outfit fw-light mb-sm-3 mb-2 text-center' data-aos="zoom-in">Frequently <span className='fw-bolder'>Asked Questions </span></h2>
                <p className=' ff-exo lh-24 fs-sm fw-normal opacity-70 mb-sm-5 mb-3 text-center' data-aos="zoom-in">Lorem ipsum dolor sit amet consectetur. Orci augue mollis eu  <span className=' d-sm-block'> volutpat mi leo. Nibh nisl consequat metus.</span></p>
                <div class="accordion mx-auto" id="accordionExample">
                    <div data-aos="zoom-in">
                        <div class="accordion-item p-sm-4 p-3">
                            <h2 class="accordion-header mb-0" id="headingOne">
                                <button class="accordion-button mb-0 ff-outfit fw-medium fs-sm lh-24 opacity-70" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    What is Artificial Intelligence (AI)?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body ff-exo fw-normal fs-sm lh-24 mb-0 opacity-70">
                                    Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These tasks include learning, reasoning, problem-solving, perception, and language understanding.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in">
                        <div class="accordion-item p-sm-4 p-3">
                            <h2 class="accordion-header mb-0" id="headingTwo">
                                <button class="accordion-button collapsed mb-0 ff-outfit fw-medium fs-sm lh-24 opacity-70" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    How does AI benefit our company?
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body  ff-exo fw-normal fs-sm lh-24 mb-0 opacity-70">
                                    AI benefits our company by improving efficiency, automating repetitive tasks, providing insights from data analysis, and enhancing decision-making processes.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in">
                        <div class="accordion-item p-sm-4 p-3">
                            <h2 class="accordion-header mb-0" id="headingThree">
                                <button class="accordion-button collapsed  ff-outfit fw-medium fs-sm lh-24 opacity-70" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    What types of AI technologies are relevant to our industry?
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body  ff-exo fw-normal fs-sm lh-24 mb-0 opacity-70">
                                    The types of AI technologies relevant to our industry include machine learning, natural language processing, computer vision, robotics, and predictive analytics.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in">
                        <div class="accordion-item p-sm-4 p-3">
                            <h2 class="accordion-header mb-0" id="headingThree">
                                <button class="accordion-button collapsed  ff-outfit fw-medium fs-sm lh-24 opacity-70" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    How can our employees adapt to AI integration?
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body  ff-exo fw-normal fs-sm lh-24 mb-0 opacity-70">
                                    To adapt to AI integration, employees can undergo training programs, develop new skills such as data analysis and programming, embrace a mindset of continuous learning, and collaborate with AI systems to enhance their productivity.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in">
                        <div class="accordion-item p-sm-4 p-3">
                            <h2 class="accordion-header mb-0" id="headingThree">
                                <button class="accordion-button collapsed  ff-outfit fw-medium fs-sm lh-24 opacity-70" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    How can our company ensure data security with AI?
                                </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body  ff-exo fw-normal fs-sm lh-24 mb-0 opacity-70">
                                    To ensure data security with AI, our company can implement robust cybersecurity measures, such as encryption, access controls, regular security audits, and compliance with data protection regulations.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='newsletter px-4'>
                    <p className='ff-outfit fw-light fs-lg lh-57 page-white text-center mb-2' data-aos="zoom-in">Subscribe to our <span className='fw-bolder'>Newsletter!</span></p>
                    <p className='ff-exo fw-normal fs-sm lh-24 page-white mb-0 text-center' data-aos="zoom-in">Be the first to get exclusive offers and the latest news.</p>
                    <div className='d-flex align-items-center justify-content-between emailbox w-100 mx-auto' data-aos="zoom-in">
                        <input type="email" placeholder='Enter your email' className='bg-transparent border-0 email w-100  ff-outfit fw-semibold fs-sm lh-24 page-white' />
                        <button className='d-none d-md-block emailbtn position-relative bg-transparent ms-3 ff-outfit fw-semibold fs-sm lh-24 page-white '>Subscribe</button>
                    </div>
                    <button className='d-flex d-md-none mt-sm-3 mt-2  emailbtn position-relative bg-transparent mx-auto ff-outfit fw-semibold fs-sm lh-24 page-white '>Subscribe</button>
                </div>
            </Container>
        </div>
    )
}

export default Faq;
