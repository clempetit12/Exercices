import { useState } from "react";
import TimerFormComponent from "./Components/TimerFormComponent";
import Timer from "./Modules/Timer";
import TimerComponent from "./Components/TimerComponent";


function App() {

  const [timers, setTimers] = useState([])

  const timerValue = ({name,time}) => {
    if (timers.length<6) {
      setTimers(prevState =>[...prevState,{name,time}])
      console.table(timers);
    }
    
  }

  return (
    <div className="App">
  <div className="row row-col-2">
    <div className="col-4">
      <TimerFormComponent timerValue={timerValue}/>
    </div>
    <div className="col-8">
      <TimerComponent  timers = {timers}/>
    </div>

  </div>
    </div>
  );
}

export default App;
