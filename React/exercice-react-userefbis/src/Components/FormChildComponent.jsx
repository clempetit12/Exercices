import { useRef } from "react"

const FormChildComponent = (props) => {

    const {display} = props

    const firstnameReference = useRef()
    const lastnameReference = useRef()
    const birthDateReference = useRef()

 

    const onSubmit = () => {
       
        display (firstnameReference.current.value, lastnameReference.current.value, birthDateReference.current.value)
      ; 
    }
    return (
        <>
              <h1>Formulaire</h1>
      <form action="">
            <div className="row">
            <label htmlFor="firstname">Firstname</label>
            <input type="text" ref={firstnameReference}/>
            </div>
           <div className="col">
           <label htmlFor="lastname">Lastname</label>
            <input type="text" ref={lastnameReference}/>
           </div>
            <div className="col">
            <label htmlFor="birthDate">BirthDate</label>
            <input type="text" ref={birthDateReference}/>
            </div>
           
            <button onClick={onSubmit}>Submit</button>
            </form>
        </>
  
    )
}
export default FormChildComponent