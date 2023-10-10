import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import { useMyContext } from "../Context/ContactContext"

const DisplayComponent = (props) => {

    const { idContact, firstnameRef } = props
    const { contacts, setContacts } = useMyContext()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const mode = searchParams.get('mode')

    const objParams = useParams()
    const { monparam } = objParams

    const foundContact = contacts.find(c => c.id === idContact)
    console.log(idContact);
    console.log("foundcontact" + foundContact.lastname);

    console.log("foundcontact" + foundContact.firstname);

    const edit = () => {
        const param = foundContact.id
        navigate(`/formContact/${param}?mode=edit`)
    }

    const deleteContact = () => {
        console.log("bouton delete");
        const updatedList = contacts.filter((contact) => contact.id !== idContact);
        setContacts(updatedList)
        console.table(updatedList);
        navigate(`/contacts/${updatedList}?mode=delete `)
    }
    return (
        <div class="card mb-2 text-right">
            <button onClick={edit}>Edit</button>
            <button onClick={deleteContact}>Delit</button>
            <div class="card-body row">

                <div className="row">
                    {foundContact.firstname} {foundContact.lastname}

                </div>
                <hr />
                <div className="row">
                    <span>email : {foundContact.email}</span>
                </div>
                <div className="row">
                    <span>PhoneNumber : {foundContact.phoneNumber}</span>
                </div>


            </div>
        </div>
    )
}

export default DisplayComponent