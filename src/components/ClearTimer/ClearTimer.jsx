import React from 'react'
import './ClearTimer.scss'
import stopImg from './../../assets/images/stop-button.svg'

const ClearTimer = ({clearTimer}) => {


    return (
        <button
            className="clear-timer"
            onClick={clearTimer}
        >
            {/*CLEAR*/}
            <img src={stopImg} alt="Stop timer"/>
        </button>
    );
}

export default ClearTimer;
