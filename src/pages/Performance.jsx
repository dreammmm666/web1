import React, { useEffect } from 'react';
import Img from '../compo/Img';
import 'aos/dist/aos.css'; //แอนิเมชั่น
import AOS from 'aos'; //แอนิเมชั่น
import Footer from '../compo/Footer';
import Time from '../compo/Time';

import '../css/performance.css';

function Performance() {
  useEffect(() => {
      // เริ่มการตั้งค่า AOS
      AOS.init({
        offset: 200,  // ระยะห่างที่ AOS จะเริ่มแอนิเมชั่น
        duration: 1500,  // ความเร็วแอนิเมชั่น (1 วินาที)
        once: true, // แอนิเมชั่นทำแค่ครั้งเดียว
      });
    }, []); // ทำงานแค่ครั้งเดียวเมื่อโหลดคอมโพเนนต์
  return (
    <>
    <Time />
   <p className='p1' data-aos="fade-down-right">ผลงาน</p>
    <div style={{ marginTop:'2rem',}} data-aos="flip-up">
    <Img />
    </div>
    <div style={{ marginTop:'5rem',}}>
    <Footer />
    </div>
    
    </>
  )
}

export default Performance