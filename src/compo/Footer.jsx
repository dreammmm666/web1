import React from 'react'
import '../css/footer.css';
import { Link, NavLink } from 'react-router-dom';
import 'aos/dist/aos.css'; //แอนิเมชั่น
import AOS from 'aos'; //แอนิเมชั่น
function footer() {
   return (
    <div className="App" >
      <footer className="footer">
        <div className="footer-content">
          <p>TAKIANGIDEADESIGN | 3/7 หมู่ 15 ถนนประตูเชียงใหม่ ตำบลรอบเวียง อำเภอเมืองเชียงราย 57000</p>
          <div className="footer-links">
            <p>เปิดบริการทุกวันจันทร์ถึงเสาร์ ตั้งแต่เวลา 08:00 - 17:00 น.|<Link to='/Contact'>ติดต่อเรา</Link> </p>
            
             </div>
        </div>
      </footer>
    </div>
  );
}

export default footer