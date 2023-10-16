import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import ItemContext from "../Context/ItemContext"

const ProtectedRoute = (props) => {
    const {  access, setAccess } = useContext(ItemContext)

    useEffect(() => {

        axios.get("http://localhost:4434/acces")
        .then(response => {
          const responseData = response.data;
          console.log(responseData);
          console.log(responseData[0].password);
          setAccess([responseData]);
          console.log(access);
          console.log(access[0]);
          console.log(access[0].user);
        })
        .catch(error => {
          console.error("Erreur lors de la récupération des données d'accès:", error);
        });
    }, []);
    console.log(access.map(obj=>obj[0].user)[0]);
    console.log(access.map(obj=>obj[0].password));

        const userl = localStorage.getItem('user')
        console.log(userl);
        const passwordl = localStorage.getItem('password')
        console.log(passwordl);

            if(userl===access.map(obj=>obj[0].user)[0] && passwordl===access.map(obj=>obj[0].password)[0]){
                return (<>
                    {props.children}
                </>)
            }else {
                return <Navigate to={"/"}></Navigate>
            }
}
       

            
      
          
        

export default ProtectedRoute