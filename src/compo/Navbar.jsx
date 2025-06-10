import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import Logo from '../img/LOGO3.jpg';

import 'aos/dist/aos.css';
import AOS from 'aos';

function Navbar() {
  useEffect(() => {
    AOS.init({
      duration: 1600,
      once: true
    });
  }, []);

  return (
    <div className='container' data-aos="fade-right">
      <Link to='/'>
        <div className='Logo'>
          <img src={Logo} alt='Logo' />
        </div>
      </Link>
      <nav>
        <ul className='menu'>
          <li><Link to='/'>หน้าเเรก</Link></li>
          <li><Link to='/Performance'>ผลงาน</Link></li>
          <li><Link to='/Contact'>ติดต่อเรา</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
