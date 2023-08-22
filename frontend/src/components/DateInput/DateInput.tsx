import React, { useState, useEffect } from 'react'

const DateInput: React.FC = () => {
    const [minDate, setMinDate] = useState<string>('');

    useEffect(() => {
        const today = new Date().toISOString().split("T")[0];
        setMinDate(today)
    }, [])

  return (
    <div>
        <input type="date" id='dateInput' min={minDate} name='dateInput'></input>
        </div>
  )
}

export default DateInput