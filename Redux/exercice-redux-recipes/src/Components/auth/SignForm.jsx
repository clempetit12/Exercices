import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SIGN_IN_URL, SIGN_UP_URL } from "../../firebaseConfig"
import { setAuthMode, setUser } from "./authSlice"

const SignForm = () => {


    const authMode = useSelector(state => state.auth.authMode)
    const dispatch = useDispatch()

    const emailRef= useRef()
    const passwordRef = useRef()

const submitHandler = async (e) => {
e.preventDefault()
console.log("envoyer data");
const email = emailRef.current.value
const password = passwordRef.current.value
const credentials = { email, password, returnSecureToken: true }
const URL = authMode === "Se connecter" ? SIGN_IN_URL : SIGN_UP_URL
try {
    const response = await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(credentials)
    })
    if(!response.ok) {
        throw new Error("Something went wrong during the " + authMode)
    }

    const data = await response.json()
    console.log(data);
    localStorage.setItem("token", data.idToken)
    dispatch(setUser(data))
} catch (error) {
    console.error(error.message);
}

}

    return(
        <>
        <h1>Formulaire de connexion</h1>
        <form action="" onSubmit={submitHandler}>
            <div>
                <label htmlFor="email" placeholder="email">Email : </label>
                <input type="text" ref={emailRef} />
            </div>
            <div>
                <label htmlFor="password" placeholder="password">Password : </label>
                <input type="password" ref={passwordRef} />
            </div>
            <button>{authMode}</button>
           
        </form>
        <button
                onClick={() => dispatch(setAuthMode(authMode === "Se connecter" ? "S'inscrire" : "Se connecter"))}>{authMode === "Se connecter" ? "S'inscrire" : "Se connecter"}</button>
            
        </>
    )
}

export default SignForm

