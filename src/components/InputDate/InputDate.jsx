import React, {useEffect, useState} from 'react'
import './InputDate.scss'

const InputDate = (props) => {
    const [inputDate, setInputDate] = useState('')
    const [minInputDate, setMinInputDate] = useState('')

    useEffect(() => {
        const timeNow = new Date()
        const year = timeNow.getFullYear()
        const month = timeNow.getMonth() + 1
        const day = timeNow.getDate()

        setInputDate(`${year}-${month}-${day}T00:00`)
        setMinInputDate(getMinInputDate())
    }, [])

    const getMinInputDate = () => new Date().toISOString().toString().slice(0,16)

    const changeInputDate = (e) => {
        const inputUserDate = e.target.value
        setInputDate(inputUserDate)

        const inputUserDateInMilliseconds = new Date(inputUserDate).getTime()
        props.setInputDate(inputUserDateInMilliseconds)
    }

    return (
        <div className="event-name input-date">
            <input
                type="datetime-local"
                className="event-name__input"
                value={inputDate}
                min={minInputDate}
                onChange={changeInputDate}
            />
        </div>
    );
}

export default InputDate;
