import React, { useEffect, useState } from 'react'
import pagelogo from "../assets/images/footerlogo.webp";
const Loadersection = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const delay = setTimeout(() => {
            setIsLoaded(true);
            document.body.style.overflow = '';
        }, 4000);

        return () => clearTimeout(delay);
    }, []);
    useEffect(() => {
        document.body.style.overflow = 'hidden';
    }, []);
    return (
        <div>
            <div className=" vh-100 vw-100 page-linear-purple position-fixed top-0 start-0 p-5" style={{ display: isLoaded ? 'none' : 'block', zIndex: 9999 }}>
                <div className='d-flex align-items-center justify-content-center vh-100 position-relative p-5 '>
                    <div className=' d-flex flex-column gap-4 justify-content-center align-items-center'>
                    <img src={pagelogo} alt=""  className=' loaderimg'/>
                    <div className="loader">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loadersection