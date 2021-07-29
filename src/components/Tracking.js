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
            fields.selected && <div 
                className={style.trackingContainer + ' fade-in'}
                >
            {
                fields.selected && <>
                    <h3 style={{margin: 0, borderBottom: '1px solid var(--prime-color)', padding: '0 0 20px 0'}}>Your Selection</h3>
                    <p className={style.line}>
                        <span>Selected Date: {fields.selected[0].toDateString()}</span>
                        <span 
                            className={style.change}
                            onClick={() => change()}
                            >
                                { } change
                        </span>
                    </p>
                    <p className={style.line}>
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