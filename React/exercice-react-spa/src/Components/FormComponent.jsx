import {  useContext, useRef,  } from 'react'
import Dog from '../Models/Chiens';
import { MonContext } from '../Context/MonContext';



const FormComponent = () => {

const {setTabDogs} = useContext(MonContext)
    
  const nameReference = useRef();
  const raceReference = useRef();
  const ageReference = useRef();



  const submitHandler = (e) => {
    
    e.preventDefault()
    const name = nameReference.current.value;
    const race = raceReference.current.value;
    const age = ageReference.current.value;
    const newDog = new Dog(name,race,age)
        setTabDogs(prevDogs => [...prevDogs,newDog])
    
      }



  /*  if ((typeof(name)  === "string") && (typeof(race) === "string") && (typeof(age) === "number") && (typeof(lienPhoto) === "string")    ) {
   
       
    } else {
        alert("ce n'est pas valide")
       
    } 
  }; */


  return (  
    <>
      <form >
        <h1>Nouvel arrivant</h1>
        <div>
          <input type="text" placeholder="Nom" ref={nameReference} />
        </div>
        <div>
          <input type="text" placeholder="Race" ref={raceReference} />
        </div>
        <div>
          <input type="number" placeholder="Age" ref={ageReference} />
        </div>
      
        <div>
            <button onClick={submitHandler}>Ajouter</button>
        </div>
      </form>
    </>
  );
};


export default FormComponent
