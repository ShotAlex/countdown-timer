import React, { useEffect, useState } from 'react';
import './InputDate.scss';

const InputDate = (props) => {
  const [inputDate, setInputDate] = useState('');
  const [minInputDate, setMinInputDate] = useState('');

  useEffect(() => {
    const isDateSet = localStorage.getItem('datetime-local');
    if (isDateSet) {
      setInputDate(isDateSet);
    } else {
      const timeNow = new Date();
      const year = timeNow.getFullYear();
      const month = timeNow.getMonth() + 1;
      const day = timeNow.getDate();

      setInputDate(`${year}-${month}-${day}T00:00`);
      setMinInputDate(getMinInputDate());
    }
  }, []);

  const getMinInputDate = () => new Date().toISOString().toString().slice(0, 16);

  const checkInputTime = (inputUserDate) => inputUserDate > new Date().getTime();

  const changeInputDate = (e) => {
    const inputUserDate = e.target.value;
    const inputUserDateInMilliseconds = new Date(inputUserDate).getTime();

    if (checkInputTime(inputUserDateInMilliseconds)) {
      setInputDate(inputUserDate);
      props.setInputDate(inputUserDateInMilliseconds);
      localStorage.setItem('datetime-local', inputUserDate);
    } else {
      alert("Sorry, You can't travel back in time yet");
    }
  };

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
};

export default InputDate;
