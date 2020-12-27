import React, {useState} from 'react'
import './InputDate.scss'

const InputDate = () => {
    const [inputDate, setInputDate] = useState('')

    const changeInputDate = (e) => {
        setInputDate(e.target.value)
    }

    const getMinInputDate = () => new Date().toISOString()


    return (
        <div className="event-name input-date">
            <input
                type="datetime-local"
                className="event-name__input"
                value={inputDate}
                // min={getMinInputDate()}
                min='2020-12-25T12:12'
                onChange={changeInputDate}
            />
        </div>
    );
}

export default InputDate;
