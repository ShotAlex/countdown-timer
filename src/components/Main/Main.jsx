import React, { useState, useEffect } from 'react';
import { useInterval } from '../../hooks/useInterval';
import EventName from '../EventName/EventName';
import InputDate from '../InputDate/InputDate';
import ClearTimer from '../ClearTimer/ClearTimer';
import EndTime from '../EndTime/EndTime';
import { DAY_MS, HOUR_MS, MIN_MS, SEC_MS, INITIAL_STATE } from '../../variables/variables.js';
import './Main.scss';

const Main = () => {
  const [timeLeft, setTimeLeft] = useState(INITIAL_STATE);
  const [inputDate, setInputDate] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [isEndTimePopupVisible, setIsEndTimePopupVisible] = useState(false);

  useEffect(() => {
    const inputAtLastSeanseDate = localStorage.getItem('input-date');
    inputAtLastSeanseDate && setInputDate(inputAtLastSeanseDate);
  }, []);

  useEffect(() => {
    if (inputDate > 0) {
      localStorage.setItem('input-date', inputDate);
      setTimerOn(true);
    }
  }, [inputDate]);

  useInterval(
    () => {
      inputDate > 0 && getDateDifference();
    },
    timerOn ? 1000 : null,
  );

  const getDateDifference = () => {
    const dateNow = new Date();
    const currencyMilliseconds = inputDate - dateNow.getTime();
    if (currencyMilliseconds > 0) {
      convertMillisecondsToDayHoursMinSec(currencyMilliseconds);
    } else {
      setTimerOn(false);
      setIsEndTimePopupVisible(true);
    }
  };

  const convertMillisecondsToDayHoursMinSec = (milliseconds) => {
    const days = Math.floor(milliseconds / DAY_MS);
    const hours = Math.floor((milliseconds % DAY_MS) / HOUR_MS);
    const minutes = Math.floor((milliseconds % HOUR_MS) / MIN_MS);
    const seconds = Math.floor((milliseconds % MIN_MS) / SEC_MS);

    setTimeLeft({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  const clearTimer = () => {
    setInputDate(0);
    setTimeLeft(INITIAL_STATE);
    setTimerOn(false);
    localStorage.setItem('input-date', 0);
  };

  const closePopup = () => setIsEndTimePopupVisible(false);

  return (
    <>
      <div className="main">
        <h1 className="main__title">Countdown Timer</h1>

        <EventName />
        <InputDate setInputDate={setInputDate} />

        <div className="main-countdown">
          <div className="main-countdown__item">
            {timeLeft.days}
            <span>days</span>
          </div>
          <div className="main-countdown__item">
            {timeLeft.hours}
            <span>hours</span>
          </div>
          <div className="main-countdown__item">
            {timeLeft.minutes}
            <span>min</span>
          </div>
          <div className="main-countdown__item">
            {timeLeft.seconds}
            <span>sec</span>
          </div>
        </div>

        <ClearTimer clearTimer={clearTimer} />
      </div>
      <EndTime visible={isEndTimePopupVisible} setIsVisible={closePopup} />
    </>
  );
};

export default Main;
