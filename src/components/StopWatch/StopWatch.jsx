import React, { useState, useEffect } from "react";
import '../../App.css'

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div id="stopwatch">
    <h2>Cronómetro</h2>
    <div className="div-span">
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
      <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="div-buttons">
      {!timerOn && time === 0 && (
        <button onClick={() => setTimerOn(true)}>Start</button>
      )}
      {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
      {!timerOn && time > 0 && (
        <button onClick={() => setTime(0)}>Reset</button>
      )}
      {!timerOn && time > 0 && (
        <button onClick={() => setTimerOn(true)}>Resume</button>
      )}
      </div>
    </div>
  );
};

export default StopWatch;
