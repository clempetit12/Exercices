import { useNavigate } from "react-router-dom"
import { useMyContext } from "../Context/ContactContext"
import DisplayComponent from "./DisplayComponent"

const Contacts = ({ children }) => {


    const { contacts} = useMyContext()

    const navigate = useNavigate()

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
