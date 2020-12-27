import React, {useState,useEffect} from "react";
import './Main.scss';

const DAY_MS = 8.64e7;
const HOUR_MS = 3.6e6;
const MIN_MS = 6e4;
const SEC_MS = 1e3;

const Main = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    })

    useEffect(() => {
        setInterval(() => {
        getDateDifference()
        }, 1000)
    }, [])

    const getDateDifference = () => {
        const dateNow = new Date();
        const inputDate = new Date(2020,11, 31, 23, 59, 59)
        const currencyMilliseconds = inputDate.getTime() - dateNow.getTime()
        convertMillisecondsToDayHoursMinSec(currencyMilliseconds)
    }

    const convertMillisecondsToDayHoursMinSec = (milliseconds) => {
        const days = Math.floor(milliseconds / DAY_MS);
        const hours = Math.floor(milliseconds % DAY_MS / HOUR_MS);
        const minutes = Math.floor(milliseconds % HOUR_MS / MIN_MS);
        const seconds = Math.floor(milliseconds % MIN_MS / SEC_MS);

        setTimeLeft({
            days,
            hours,
            minutes,
            seconds
        })
    }



    return (
        <div className="main">
            <h1 className="main__title">Countdown Timer</h1>

            <div className="main-name-event">
                Input U event and click start
            </div>

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
        </div>
    )
}

export default Main;
