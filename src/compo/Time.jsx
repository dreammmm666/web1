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
      const currentDay = now.getDay();

      if (currentDay === 0) {
        setMessage('ร้านปิดวันอาทิตย์');
        return;
      }

      if (currentHour >= openHour && currentHour < closeHour) {
        const hoursLeft = closeHour - currentHour;
        setMessage(`😸ร้านเปิดอยู่! จะปิดในอีก ${hoursLeft} ชั่วโมง`);
      } else {
        let hoursUntilOpen;
        let nextOpenDay = currentDay;

        if (currentHour >= closeHour) {
          nextOpenDay = (currentDay + 1) % 7;
        }

        if (nextOpenDay === 0) {
          nextOpenDay = 1;
        }

        const daysUntilOpen = (nextOpenDay - currentDay + 7) % 7;

        if (daysUntilOpen === 0) {
          hoursUntilOpen = openHour - currentHour;
        } else {
          hoursUntilOpen = (daysUntilOpen * 24) - currentHour + openHour;
        }

        setMessage(`😶‍🌫️ร้านปิดอยู่จะเปิดอีก ${hoursUntilOpen} ชั่วโมง`);
      }
    };

    updateMessage();
    const intervalId = setInterval(updateMessage, 60000);

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
