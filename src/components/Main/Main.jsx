import React, {useState,useEffect} from "react"
import EventName from "../EventName/EventName"
import InputDate from "../InputDate/InputDate"
import './Main.scss'
import {
    DAY_MS,
    HOUR_MS,
    MIN_MS,
    SEC_MS,
    INITIAL_STATE
} from '../../variables/variables.js'


const Main = () => {
    const [timeLeft, setTimeLeft] = useState(INITIAL_STATE)
    const [inputDate, setInputDate] = useState(0)

    useEffect(() => {
        inputDate !== 0 && startTimer()
    }, [inputDate])


    const getDateDifference = (inputUserDate) => {
        const dateNow = new Date();
        const currencyMilliseconds = inputDate - dateNow.getTime()
        convertMillisecondsToDayHoursMinSec(currencyMilliseconds)
    }

    const startTimer = () => {
        setInterval(() => {
            getDateDifference()
        }, 1000)
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

            <EventName />
            <InputDate
                setInputDate={setInputDate}
            />

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
