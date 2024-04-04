import logo from './logo.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Herosection from './components/Herosection';
import Aboutus from './components/Aboutus';
import Whychooseus from './components/Whychooseus';
import Contactus from './components/Contactus';
import Faq from './components/Faq';
import Footer from './components/Footer';
import { useEffect } from 'react';
import Loadersection from './components/Loadersection';
import Backtotop from './components/Backtotop';

function App() {
  useEffect(() => {
    AOS.init(
{once:true,
  duration:2000,
}
    );
  }, [])
  return (
<div>
  <div className=' overflow-hidden'>
    <Loadersection/>
    <Backtotop/>
<Herosection/>
<Aboutus/>
<Whychooseus/>
<Contactus/>
<Faq/>
<Footer/>
</div>
</div>
  );
}

export default App;
