import React, {useState} from 'react'
import './EventName.scss'

const EventName = () => {
    const [eventName, setEventName] = useState('')

    const changeEventName = (e) => {
        setEventName(e.target.value)
    }

    return (
        <div className="event-name">
            <input
                type="text"
                placeholder="Input event name"
                onChange={changeEventName}
                value={eventName} />
        </div>
    );
}

export default EventName;
