import { useState } from 'react'
import Schedule from './components/Schedule'
import Tracking from './components/Tracking'
import BodyPart from './components/BodyPart'
import './App.css';

const App = () => {
  //contain state in single object
  const [fields, setFields] = useState({});

  //functional update of fields object
  const updateFields = (name, value) => {
    let temp = { ...fields }
    temp[name] = value
    setFields(temp)
  }

  //Store current stage of applicaton in state
  const [stage, setStage] = useState('schedule')

  console.log(fields)

  return (
    <div className="App">
      <div className="right-column">
        <Tracking 
          fields={fields}
          updateFields={(name, value) => updateFields(name, value)}
          setStage={(stage) => setStage(stage)}
          setFields={(obj) => setFields(obj)}
        />
      </div>
      <div className="left-column">
        {stage === 'schedule' ?
          <Schedule 
            updateFields={(name, value) => updateFields(name, value)}
            setStage={(stage) => setStage(stage)}
          /> :
          stage === 'body_part' &&
            <BodyPart 
              updateFields={(name, value) => updateFields(name, value)}
              setStage={(stage) => setStage(stage)}
            />
        }
      </div>
    </div>
  );
}

export default App;
