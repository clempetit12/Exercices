import { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"


const FormAuth = () => {

const userRef = useRef()
const passwordRef = useRef()
const navigate = useNavigate()

const setStorage = () => {
  const user = userRef.current.value
  const password = passwordRef.current.value
  console.log(password);
  console.log("j'appuie sur le bouton")
  localStorage.setItem('user',user)
  localStorage.setItem('password',password)
  navigate("/addItems")
}
    return (
      <>
      <h1 className="display-5 mb-3 mt-2">Page authentification </h1>
      <hr />
      <div className="container ">
      <div className="row mb-2">
  <div className="col-6 mb-2">
  <input type="text" placeholder="user" ref={userRef} />
  </div>
  <div className="row mb-2">
  <div className="col-6">
  <input type="password" placeholder="password"  ref={passwordRef}/>
    </div>
  </div>
      </div>

   <button className="btn btn-outline-success mb-3" onClick={setStorage}>Connexion</button>
</div>
      
      
     
      </>  
    )
}

export default FormAuth