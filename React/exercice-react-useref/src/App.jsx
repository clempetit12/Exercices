
import './App.css'
import FormChildComponent from './Components/FormChildComponent'

function App() {

  const display = (firstnameReference, lastnameReference, birthDateReference) => {
    console.log(firstnameReference);
    console.log(lastnameReference);
    console.log(birthDateReference);


  }

  return (
    <>
      <div className="container">
        <FormChildComponent display = {display}/>
      </div>
       
    </>
  )
}

export default App
