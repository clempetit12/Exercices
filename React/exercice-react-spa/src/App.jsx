
import { useState } from "react"
import FormComponent from "./Components/FormComponent"
import CardComponent from "./Components/CardComponent"
import { MonContext } from "./Context/MonContext"

function App() {

  const [tabDogs, setTabDogs] = useState([{MonContext:[]}])
  console.table(tabDogs);

 

  return (
    
      <MonContext.Provider value={{tabDogs,setTabDogs}}>
      <div className="row">
        <div className="col-4">
        <FormComponent  />
        </div>
    <div className="col-8">
<CardComponent/>
    </div>

      </div>
  

</MonContext.Provider>
    
  )
}

export default App
