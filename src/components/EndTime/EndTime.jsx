import React from 'react';
import TimerImg from './../../assets/images/timer.svg';
import CloseImg from './../../assets/images/close.svg';
import './EndTime.scss';


const EndTime = ({visible, setIsVisible}) => {
    const show = visible ? ' show' : '';
    const close = () => setIsVisible(false);

    return (
        <>
            <div className={`end-time-bg${show}`} onClick={close}></div>
            <div className={`end-time${show}`} >
                <div className='end-time-content'>
                    <img
                        className='end-time-content__close'
                        src={CloseImg} alt='close popup'
                        onClick={close}
                    />
                    <img
                        className='end-time-content__timer'
                        src={TimerImg} alt='time end'
                    />
                </div>
            </div>
        </>
    );
};

export default EndTime;
