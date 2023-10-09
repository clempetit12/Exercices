import { useState } from "react";
import ApiComponent from "./Components/ApiComponent";
import Cheetah from "./Models/Cheetah";

function App() {

  const [cheetahs, setCheetahs] = useState([])
  const [manageApiId, setManageApiId] = useState(1)

  const handleData = (data) => {
    
    const newCheetah = (data.map(c => new Cheetah(c.name,c.taxonomy,c.characteristics, c.locations))
    )
    console.table(newCheetah);
    setCheetahs(prevcheetah => [...prevcheetah,newCheetah])
    
    return(
      console.table("cheetahs"+cheetahs)
    )}
  
  return (
    <div className="App">
    <ApiComponent cheetahtotoApp={handleData} />
    
    
    </div>
  );
}

export default App;

