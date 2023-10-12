import { Navigate } from "react-router-dom"

const ProtectedRoute = (props) => {
    const userl = localStorage.getItem('user')
    const passwordl = localStorage.getItem('password')
console.log(userl);
console.log(passwordl);
    if(userl==="user" & passwordl==="hello"){
        return (<>
            {props.children}
        </>)
    }else {
        return <Navigate to={"/"}></Navigate>
    }
}

export default ProtectedRoute