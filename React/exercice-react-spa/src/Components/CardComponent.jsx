import { useContext } from "react"
import { MonContext } from "../Context/MonContext"

const CardComponent = () => {

const {tabDogs} = useContext(MonContext)

    return (
        <>
{           <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Race</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
         {tabDogs.map((element, index) => <tr key={index}>
          
         <td>{element.name}</td>
         <td>{element.race}</td></tr>)}
           {console.table(tabDogs)} 
            
        </tbody>
      </table> }
        </>

    )

}

export default CardComponent