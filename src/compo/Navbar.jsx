import React, { useEffect } from 'react'; //แอนิเมชั่น
import { Link, NavLink } from 'react-router-dom';
import '../css/Navbar.css'
import Logo from '../img/LOGO3.jpg';
import Logo2 from '../img/Remov.png';
import 'aos/dist/aos.css'; //แอนิเมชั่น
import AOS from 'aos'; //แอนิเมชั่น



function Navbar() {
   useEffect(() => {
    AOS.init({
      duration: 1600,  // ความเร็วของ animation
      once: true       // ให้เล่นแอนิเมชันแค่รอบเดียว
    });
  }, []);
  return (
    <>
   <div className='container' data-aos="fade-right">
        <Link to='/'>
  <div className='Logo'>
    <img src={Logo} alt='Logo' />
  </div>
</Link>
    <nav>
        <div className='menu'>
          <Link to='/'><li>หน้าเเรก</li></Link>
          < Link to='/Performance'><li>ผลงาน</li></Link>
           <Link to='/Contact'><li>ติดต่อเรา</li></Link>
        </div>
    </nav>
    </div>
    </>
  )
}

export default Navbar