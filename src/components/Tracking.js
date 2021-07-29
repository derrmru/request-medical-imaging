import style from './Tracking.module.css'

const Tracking = ({
    fields,
    updateFields,
    setStage,
    setFields
}) => {
    const change = () => {
        setFields({})
        setStage('schedule')
    }

    return (
        <>
        {
            <div 
                className={style.trackingContainer + ' fade-in'}
                >
            {
                !fields.selected && <>
                    <h3 className={style.header + ' fade-in'}>Please Select Your Preferred Timeslot & Date</h3>
                </>
            }
            {
                fields.selected && <>
                    <h3 className={style.header + ' fade-in'}>Your Selection</h3>
                    <p className={style.line + ' fade-in'}>
                        <span>Selected Date: {fields.selected[0].toDateString()}</span>
                        <span 
                            className={style.change}
                            onClick={() => change()}
                            >
                                { } change
                        </span>
                    </p>
                    <p className={style.line + ' fade-in'}>
                        <span>Selected Time: {fields.selected[1]}</span>
                        <span 
                            className={style.change}
                            onClick={() => change()}
                            >
                                { } change
                        </span>
                    </p>
                </>
            }
        </div>
        }
        </>
    )
}

export default Tracking