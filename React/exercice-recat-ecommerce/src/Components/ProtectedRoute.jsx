import { Navigate } from "react-router-dom"

const ProtectedRoute = (props) => {

    const {userRef, passwordRef} = props
const value1=userRef.current.value
const value2=passwordRef.current.value

    if(value1==="user" & value2==="hello"){
        return (<>
            {props.children}
        </>)
    }else {
        return <Navigate to={"/addItems"}></Navigate>
    }
}

export default ProtectedRoute