import React from 'react';
import stopImg from './../../assets/images/stop-button.svg';
import './ClearTimer.scss';

const ClearTimer = ({clearTimer}) => {
    return (
        <button
            className='clear-timer'
            onClick={clearTimer}
            title='Stop timer'
        >
            <img src={stopImg} alt='Stop timer'/>
        </button>
    );
};

export default ClearTimer;
