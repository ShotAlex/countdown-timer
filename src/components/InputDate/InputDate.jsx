import React, {useState} from 'react'
import './InputDate.scss'

const InputDate = (props) => {
    const [inputDate, setInputDate] = useState('')

    const changeInputDate = (e) => {
        const inputUserDate = e.target.value
        setInputDate(inputUserDate)

        const inputUserDateInMilliseconds = new Date(inputUserDate).getTime()
        props.setInputDate(inputUserDateInMilliseconds)
    }

    const getMinInputDate = () => {
        return new Date().toISOString().toString().slice(0,16)
    }

    return (
        <div className="event-name input-date">
            <input
                type="datetime-local"
                className="event-name__input"
                defaultValue={inputDate}
                min={getMinInputDate()}
                onChange={changeInputDate}
            />
        </div>
    );
}

export default InputDate;
