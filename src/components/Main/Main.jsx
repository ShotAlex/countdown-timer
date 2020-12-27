import React, {useState,useEffect} from "react";
import './Main.scss';

const Main = () => {
    const [currentDate, setCurrentDate] = useState('')
    const [timeLeft, setTimeLeft] = useState({
        days: 12,
        hours: 4,
        minutes: 32,
        seconds: 52
    })

    useEffect(() => {
        setInterval(() => {
            getCurrentDate()
        }, 1000)
    }, [])

    const getCurrentDate = () => {
        const date = new Date()
            .toLocaleString("ru", {
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            })

        setCurrentDate(date)
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

            <div className="main-current-date">
                Now: {currentDate}
            </div>
        </div>
    )
}

export default Main;
