import style from './ScheduleHeader.module.css'

const ScheduleHeader = ({
    startDate,
    setStartDate,
    newDate
}) => {
    return (
        <>
            <div className={style.header}>
                <div 
                    className={style.arrow}
                    onClick={() => newDate(-7) >= new Date().setHours(0, 0, 0, 0) && setStartDate(newDate(-7))}
                    >
                        &#8678;
                </div>
                <div className={style.date}>{startDate.toDateString()} - {newDate(7).toDateString()}</div>
                <div 
                    className={style.arrow}
                    onClick={() => setStartDate(newDate(7))}
                    >
                        &#8680;
                </div>
            </div>
        </>
    )
}

export default ScheduleHeader