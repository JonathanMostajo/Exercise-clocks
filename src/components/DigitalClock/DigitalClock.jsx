import React, { useEffect, useState } from "react";
import '../../App.css'

const DigitalClock = () => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div className="digital-clock">
      <h2>Hora actual</h2>
      <h2>{clockState}</h2>
    </div>
  );
};

export default DigitalClock;
