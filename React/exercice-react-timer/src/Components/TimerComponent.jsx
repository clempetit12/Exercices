import { useEffect, useState, useRef } from "react"



const TimerComponent = (props) => {
    const { timers } = props
    const Ref = useRef(null);
    const [time, setTime] = useState('00:00:00')

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        console.log(total);
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
            
        };

    }

    const startTimer = (e) => {
        let { total, hours, minutes, seconds }
            = getTimeRemaining(e);
        if (total >= 0) {

            setTime(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }
    const clearTimer = (e) => {
 
    
        setTime('00:00:00');

        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
 
    const getDeadTime = () => {
        let deadline = new Date();
 
        deadline.setSeconds(deadline.getSeconds() + 30);
        return deadline;
    }
 
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
 
 
    const onClickReset = () => {
        clearTimer(getDeadTime());
    }
 
    return (
        <div className="App">
            <h2>{time}</h2>
            <button onClick={onClickReset}>Reset</button>
        </div>
    )
}




export default TimerComponent
