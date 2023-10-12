import { useRef } from "react"
import { Link } from "react-router-dom"


const FormAuth = () => {

const userRef = useRef()
const passwordRef = useRef()
    return (
      <>
      <h1>Page authentification </h1>

      <input type="text" placeholder="user" ref={userRef} />
      <input type="password" placeholder="password"  ref={passwordRef}/>
      <Link to="/addItems">Confirmer</Link>
      </>  
    )
}

export default FormAuth