import React, {useState,useEffect} from "react";
import './Main.scss';

const Main = () => {
    const [currentDate, setCurrentDate] = useState('')

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
            <div className="main-date">
                Output date
            </div>
            <div className="main-current-date">
                Now: {currentDate}
            </div>
        </div>
    );
}

export default Main;
