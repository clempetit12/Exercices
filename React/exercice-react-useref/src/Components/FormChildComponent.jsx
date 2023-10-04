import { useRef } from "react"

const FormChildComponent = (props) => {
 
    const {display} = props

    const ref = () => {
        const firstnameReference = useRef()
        const lastnameReference = useRef()
        const birthDateReference = useRef()
    }

    onSubmit = () => {
        display (firstnameReference, lastnameReference, birthDateReference)
    }
    return (
        <>
              <h1>Formulaire</h1>
        <form action="">
            <div className="row">
            <label htmlFor="firstname">Firstname</label>
            <input type="text" ref={firstnameReference}/>
            </div>
            <div className="row">
            <label htmlFor="firstname">Lastname</label>
            <input type="text" ref={LastnameReference}/>
            </div>
            <div className="row">
            <label htmlFor="firstname">BirthDate</label>
            <input type="text" ref={birthDateReference}/>
            </div>
           
            <button>Submit</button>
        </form>
        </>
  
    )
}
export default FormChildComponent