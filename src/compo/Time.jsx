import React, { useState, useEffect } from 'react';
import '../css/Time.css'; 


const Time = () => {
  const openHour = 8;
  const closeHour = 17;

  const [message, setMessage] = useState('');

  useEffect(() => {
    const updateMessage = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const currentSecond = now.getSeconds();
      const currentDay = now.getDay();

      if (currentDay === 0) {
        setMessage('ร้านปิดวันอาทิตย์');
        return;
      }

      const currentTimeInMinutes = currentHour * 60 + currentMinute;
      const closingTimeInMinutes = closeHour * 60;
      const openingTimeInMinutes = openHour * 60;

      if (
        currentTimeInMinutes >= openingTimeInMinutes &&
        currentTimeInMinutes < closingTimeInMinutes
      ) {
        const minutesUntilClose = closingTimeInMinutes - currentTimeInMinutes;

        if (minutesUntilClose <= 30) {
          const sec = 59 - currentSecond;
          setMessage(`🚨 ร้านกำลังจะปิดในอีก ${minutesUntilClose} นาที ${sec} วินาที`);
        } else {
          const hoursLeft = Math.floor(minutesUntilClose / 60);
          const minutesLeft = minutesUntilClose % 60;

          const hourStr = hoursLeft > 0 ? `${hoursLeft} ชั่วโมง` : '';
          const minuteStr = minutesLeft > 0 ? `${minutesLeft} นาที` : '';

          setMessage(`😸 ร้านเปิดอยู่! จะปิดในอีก ${hourStr} ${minuteStr}`.trim());
        }
      } else {
        // ร้านปิด
        let nextOpenDay = currentDay;

        if (currentTimeInMinutes >= closingTimeInMinutes) {
          nextOpenDay = (currentDay + 1) % 7;
        }

        if (nextOpenDay === 0) {
          nextOpenDay = 1; // ข้ามวันอาทิตย์
        }

        const daysUntilOpen = (nextOpenDay - currentDay + 7) % 7;

        let minutesUntilOpen;
        if (daysUntilOpen === 0) {
          minutesUntilOpen = openingTimeInMinutes - currentTimeInMinutes;
        } else {
          minutesUntilOpen =
            (daysUntilOpen * 24 * 60) - currentTimeInMinutes + openingTimeInMinutes;
        }

        const hours = Math.floor(minutesUntilOpen / 60);
        const minutes = minutesUntilOpen % 60;

        const hourStr = hours > 0 ? `${hours} ชั่วโมง` : '';
        const minuteStr = minutes > 0 ? `${minutes} นาที` : '';

        setMessage(`😶‍🌫️ ร้านปิดอยู่ จะเปิดอีก ${hourStr} ${minuteStr}`.trim());
      }
    };

    updateMessage();
    const intervalId = setInterval(updateMessage, 1000); // อัปเดตทุกวินาที

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="time-container">
      <div className="marquee-text">
        {message}
      </div>
    </div>
  );
};

export default Time;
