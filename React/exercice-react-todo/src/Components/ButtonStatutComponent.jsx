import { useEffect, useState } from 'react'


const status = ['Not Started', 'In progress', 'Completeed']

const ButtonStatusComponent = (props) => {

    const { taskStatus, setTaskStatus } = props
   
    const [buttonStatus, setButtonStatus] = useState("")

    const changeStatus = () => {
        console.log("change status");
        const currentIndex = status.indexOf(taskStatus);
        console.log(currentIndex);
        const newIndex = (currentIndex + 1) % status.length;
        console.log(newIndex);
        const newStatus = status[newIndex];
        console.log(newStatus);
        setTaskStatus(newStatus);
       
      } 
       

    
    useEffect(() => {
        if (taskStatus == "Completeed") {
            console.log("delete");
        } else {
            console.log("nooo");
        }
        if (taskStatus === "Completeed") {
            setButtonStatus('success'); 
        } else if (taskStatus === "In progress") {
          setButtonStatus('warning'); 
        } else {
            setButtonStatus('secondary');
        }
    }, [taskStatus])


    return (
        <button onClick={changeStatus} value={taskStatus} className={`btn btn-${buttonStatus}`}>{taskStatus}</button>

    )
}

export default ButtonStatusComponent


