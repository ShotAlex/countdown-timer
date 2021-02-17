import React, {useEffect, useState} from 'react';
import './EventName.scss';

const EventName = () => {
    const [eventName, setEventName] = useState('');

    useEffect(() => {
        const currentEventName = localStorage.getItem('event-name');
        if (currentEventName) setEventName(currentEventName);
    }, []);

    const changeEventName = (e) => {
        setEventName(e.target.value);
        localStorage.setItem('event-name', e.target.value);
    };

    return (
        <div className='event-name'>
            <input
                type='text'
                placeholder='Input event name'
                onChange={changeEventName}
                value={eventName} />
        </div>
    );
};

export default EventName;
