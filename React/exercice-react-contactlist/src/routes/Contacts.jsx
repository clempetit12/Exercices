import { useNavigate, useParams, useSearchParams } from "react-router-dom"

import { useState } from "react"
import { Link } from "react-router-dom"
import { useMyContext } from "../Context/ContactContext"

const Contacts = ({ children }, props) => {

    const { idContact } = props

    const { contacts, setContacts } = useMyContext()


    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const objParams = useParams()
    const { monparam } = objParams


    const mode = searchParams.get('mode') ?? "defaut"
    const contactId = searchParams.get('contactId')

    const clickHandler = () => {
        console.log("ajouter");
        navigate("/formContact")

    }

    return (
        <>
            <h1>Contact List</h1> <button onClick={clickHandler} className="btn btn-success">Add</button>
            <hr />
            <div>
                {contacts !== "null" && (
                <div class="card">
                <div class="card-body">
                        
                    
                    
                </div>
                </div>)}
            </div>
        




        </>


    )
}

export default Contacts