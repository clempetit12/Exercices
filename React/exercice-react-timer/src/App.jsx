import { useState } from "react";
import TimerFormComponent from "./Components/TimerFormComponent";
import Timer from "./Modules/Timer";


function App() {

  const [timers, setTimers] = useState([])

  const timer = ({name,time}) => {
    
    setTimers(prevState =>[...prevState,{name,time}])
    console.table(timers);
    
  }

  return (
    <div className="App">
  <div className="row row-col-2">
    <div className="col-4">
      <TimerFormComponent timerTab={timer}/>
    </div>

  </div>
    </div>
  );
}

export default App;
