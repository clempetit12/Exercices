import { useRef, useState } from "react";
import Timer from "../Modules/Timer";

const TimerFormComponent = (props) => {

    const {timerValue, setTime} = props

  const nameReference = useRef();
  const timeReference = useRef();

  const addTableTimers = (e) => {
    e.preventDefault()
    const name = nameReference.current.value
    const time = timeReference.current.value
    timerValue({name,time})

  };

  return (
    <>
      <h1>Nouveau Timer</h1>
      <form action="#" >
        <div className="row">
          <input type="text" placeholder="Name" ref={nameReference} />
        </div>
        <div className="row">
          <input type="number" placeholder="Time" ref={timeReference} />
        </div>
        <button onClick={addTableTimers}>Play</button>
      </form>
    </>
  );
};

export default TimerFormComponent;
