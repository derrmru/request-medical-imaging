import { useState } from 'react'
import ScheduleHeader from './parts/ScheduleHeader'
import Calendar from './parts/Calendar'
import style from './Schedule.module.css'

const Schedule = ({
    updateFields,
    setStage
}) => {
    //reference date for schedule navigation
    const [startDate, setStartDate] = useState(new Date());

    //change date up or down
    const newDate = (direction) => {
        const nu = new Date(startDate);
        nu.setDate(nu.getDate() + direction)
        return nu
    }

    return (
        <div className='fade-in'>
            <h2>Availability</h2>
            <p>Please select your preferred date and time.</p>
            <div className={style.scheduleContainer}>
                <ScheduleHeader
                    startDate={startDate}
                    setStartDate={(e) => setStartDate(e)}
                    newDate={(direction) => newDate(direction)}
                />
                <Calendar 
                    updateFields={(name, value) => updateFields(name, value)}
                    newDate={(direction) => newDate(direction)}
                    setStage={(stage) => setStage(stage)}
                />
            </div>
        </div>
    )
}

export default Schedule