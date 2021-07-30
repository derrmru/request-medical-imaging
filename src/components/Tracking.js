import style from './Tracking.module.css'

const Tracking = ({
    fields,
    updateFields,
    setStage,
    setFields
}) => {
    //revert to time date selection and clear state
    const change = () => {
        setFields({})
        setStage('schedule')
    }

    //revert to area of body selection and clear following state
    const changeArea = () => {
        setFields({selected: fields.selected})
        setStage('body_part')
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
            {
                fields.area && <>
                    <p className={style.line + ' fade-in'}>
                        <span>Area of Body: {fields.area.split(' ').map((word, i) => {
                            return word[0].toUpperCase() + word.slice(1).toLowerCase()}
                        ).join(' ')}</span>
                        <span 
                            className={style.change}
                            onClick={() => changeArea()}
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