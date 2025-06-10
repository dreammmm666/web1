import React, { useEffect } from 'react';
import Img01 from '../img/img001.jpg';
import '../css/Home.css'
import 'aos/dist/aos.css'; //แอนิเมชั่น
import AOS from 'aos'; //แอนิเมชั่น
import Footer from '../compo/footer';
import Time from '../compo/Time';


function Home() {
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
    <div className='container1'>
    <div data-aos="fade-right">
      <img src={Img01} alt="Image 01"  className='img01'/>
    </div>
 </div>
    
   <div className='container1'>
    <div className='divp'   data-aos="fade-left" 
        data-aos-offset="50%">
      <center><p className='pbig' >ทำไมต้องเลือกเรา?</p></center>
      <p className="responsive-text" >✅ ครบจบในที่เดียว โลโก้ แบรนด์ดิ้ง เมนู ป้าย โพสต์โซเชียล ✅</p>
      <p className="responsive-text">📃 บรีฟไม่ตรงใจ? แก้ได้จนกว่าคุณจะพอใจ!  📃</p>
      <p className="responsive-text">💖 เราฟังทุกดีเทล ปรับจนกว่าคุณจะรัก! 💖</p>
      
      <p className="responsive-text" >🌟 งานคุณภาพระดับพรีเมียม สวย คม ชัด ดูดี 🌟</p>
      <p className="responsive-text" >📱 อยู่ที่ไหนก็สั่งได้ทั้งออนไลน์ & หน้าร้าน 📱</p>
      
    </div>
    
   </div>
   
   <Footer />
    
      
    </>
  )
}

export default Home