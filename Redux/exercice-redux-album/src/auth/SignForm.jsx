import { useDispatch, useSelector } from "react-redux";
import { fetchUser, postSetAuthMode, postSetUser, postSetUserSignin, postSetUserSignup, postUser, setAuthMode, setUser } from "./authSlice";
import { useRef } from "react";
import { SIGN_IN_URL, SIGN_UP_URL } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";




const SignForm = () => {

    const dispatch = useDispatch()
    const authMode = useSelector(state => state.auth.authMode)
    const navigate = useNavigate()

    const emailRef = useRef()
    const passwordRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("envoyer data");
        const credentials = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            returnSecureToken: true
        }
        {
            authMode === "Se connecter" ? (dispatch(postSetUserSignin(credentials))) : (dispatch(postSetUserSignup(credentials)))
            navigate("./")
        }






    }





    return (
        <>
            <h3>{authMode}</h3>
            <hr />
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" ref={emailRef} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" ref={passwordRef} />
                </div>
                <button>{authMode}</button>
            </form>
            <button
                onClick={() => dispatch(setAuthMode(authMode === "Se connecter" ? "S'inscrire" : "Se connecter"))}>
                {authMode === "Se connecter" ? "S'inscrire" : "Se connecter"}
            </button>
        </>
    );
}

export default SignForm;