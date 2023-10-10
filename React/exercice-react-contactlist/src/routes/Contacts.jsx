import { useNavigate, useParams, useSearchParams } from "react-router-dom"

import { useState } from "react"
import { Link } from "react-router-dom"
import { useMyContext } from "../Context/ContactContext"
import DisplayComponent from "./DisplayComponent"

const Contacts = ({ children }) => {


    const { contacts, setContacts } = useMyContext()


    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const objParams = useParams()
    const { monparam } = objParams


    const mode = searchParams.get('mode') ?? "defaut"
    const contactId = searchParams.get('contactId')

    console.table("table des contacts" + contacts);
    const clickHandler = () => {
        console.log("ajouter");
        navigate("/formContact")

    }


    return (
        <>
            <h1>Contact List</h1> <button onClick={clickHandler} className="btn btn-success">Add</button>
            <hr />

            {contacts.map(c => (
                <DisplayComponent key={c.id} idContact={c.id} />
            ))}



        </>


    )
}

export default Contacts
