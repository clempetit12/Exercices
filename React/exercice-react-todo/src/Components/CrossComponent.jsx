import { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../Contexts/TodoContext'

const CrossComponent = (props) => {

    const {deleteTask,changeStatus,completeed,taskStatus} = props

    const [taskStatusComponent, setTaskStatusComponenet] = useState(taskStatus)

    
    return (
        <>
    
       
        {(taskStatus)  === 'Completeed' && (
                        <icon onClick={deleteTask} className="center">
                            <i class="bi bi-x text-danger "></i>
                        </icon>
                    )}
    
       

        
        </>
      
    )
}
export default CrossComponent