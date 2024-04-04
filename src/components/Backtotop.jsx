import React, { useState } from 'react'


const Backtotop = () => {
    const [isVisible, setIsVisible] = useState(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
};

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    setIsVisible(true);
  } else {
    setIsVisible(false);
  }
});
  return (
    <div>
    <button className={`back-to-top ${isVisible ? 'visible' : ''} position-fixed backtotop-position z-20 backtotopposition  border-0  bg-transparent cursor-pointer`}
    onClick={scrollToTop}
    style={{ display: isVisible ? 'block' : 'none',}} >
        <div className=' backtotop d-flex justify-content-center align-items-center'>
<svg className='pb-1 m-auto svgwidth w-100' xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
  <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/>
</svg>

</div>
</button>
</div>
  )
}

export default Backtotop