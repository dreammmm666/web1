import React, { useEffect } from 'react';
import Footer from '../compo/Footer'
import '../css/Contact.css'
import Facebook from '../img/facebook.png'
import Line from '../img/LINE.png'
import Gmail from '../img/Gmail.png'
import Call from '../img/call.png'
import 'aos/dist/aos.css'; //แอนิเมชั่น
import AOS from 'aos'; //แอนิเมชั่น
import Time from '../compo/Time';

function Contact() {
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
    <p className='p1-' data-aos="fade-down-right">ติดต่อเรา</p>
    <div style={{ marginTop:'3rem',}} data-aos="flip-up"></div>
    
  

    <center>
    <div className="contact-box"  data-aos="fade-right">
  <div className="left">
    <a href='https://www.facebook.com/profile.php?id=61566409375579&locale=th_TH'  target="_blank" rel="noopener noreferrer"><img src={Facebook} alt="Facebook" /></a>
  </div>
  <div className="right">
    <p className="contact">ตะเกียง ไอเดียดีไซน์</p>
  </div>
</div>

<div className="contact-box-Line" data-aos="fade-left"> 
  <div className="left">
    <a href='https://lin.ee/AntEOCV'  target="_blank" rel="noopener noreferrer"><img src={Line} alt="Line" /></a>
  </div>

  
  <div className="right">
    <p className="contact">@625hilzl&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
  </div>
</div>

<div className="contact-box-Gmail" data-aos="fade-right">
  <div className="left">
    <img src={Gmail} alt="Line" />
  </div>
  <div className="right">
    <p className="contactGmail" style={{marginLeft:'0rem'}}>takiangideadesign@gmail.com</p>
  </div>
</div>
  
  <div className="contact-box-Call" data-aos="fade-left">
  <div className="left">
    <img src={Call} alt="Line" />
  </div>
  <div className="right">
    <p className="contact">096 294 4956</p>
  </div>
</div>


    
    </center>
   
    <Footer/>
    </>
  )
}

export default Contact