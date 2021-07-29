import style from './Calendar.module.css'

const Calendar = ({
    updateFields,
    newDate,
    setStage
}) => {

    //return boolean as to whether date has passed:
    const passed = (thisDate, hour) => {
        return (new Date().getHours() >= hour && new Date().toDateString() === thisDate.toDateString())
    }

    //on time / date selection updatefields and set stage to area of the body
    const update = (dateTime) => {
        updateFields('selected', dateTime)
        setStage('body_part')
    }

    return (
        <div className={style.calendarContainer}>
            {
                [0, 1, 2, 3, 4, 5, 6].map((date, i) => {
                    const thisDate = newDate(i)
                    thisDate.setHours(0, 0, 0, 0);
                    return thisDate.getDay() >= 1 && thisDate.getDay() <= 5 && <div
                        key={'date' + i}
                        className={style.dateColumn}
                    >
                        <div className={style.dateTitle}><strong>{thisDate.toDateString().substr(0, 10)}</strong></div>
                        <div 
                            className={style.dateTime}
                            onClick={() => passed(thisDate, 9) ?
                                console.log('date time has passed') : 
                                    update([thisDate, '09:00 - 11:00'])
                            }
                            style={
                                passed(thisDate, 9) ? 
                                    {cursor: 'default', color: '#99999980'} : 
                                    {}
                                }
                            >
                                09:00 - 11:00
                        </div>
                        <div 
                            className={style.dateTime}
                            onClick={() => passed(thisDate, 12) ?
                                console.log('date time has passed') :
                                    update([thisDate, '12:00 - 14:00'])
                            }
                            style={
                                passed(thisDate, 12) ? 
                                    {cursor: 'default', color: '#99999980'} : 
                                        {}
                                }
                            >
                                12:00 - 14:00
                        </div>
                        <div
                            className={style.dateTime}
                            onClick={() => passed(thisDate, 15) ?
                                console.log('date time has passed') :
                                    update([thisDate, '15:00 - 18:00'])
                            }
                            style={
                                passed(thisDate, 15) ? 
                                    {cursor: 'default', color: '#99999980'} : 
                                    {}
                                }
                            >
                            15:00 - 18:00
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Calendar