import { useRef, useContext } from "react"


import Contact from "../models/Contact"
import { useMyContext } from "../Context/ContactContext"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import DisplayComponent from "./DisplayComponent"

const FormContact = (props) => {

    const navigate = useNavigate()
        const {onAddContact} = props
    const {contacts, setContacts} = useMyContext()
 

    const firstnameRef = useRef()
    const lastnameRef = useRef()
    const emailRef = useRef()
    const phoneNumberRef = useRef()

    const objParams = useParams()
    const { param } = objParams

    const [searchParams] = useSearchParams()

const submitHandler = (e) => {
    e.preventDefault()
    const firstname = firstnameRef.current.value
    const lastname = lastnameRef.current.value
    const email = emailRef.current.value
    const phoneNumber = phoneNumberRef.current.value
    const newContact = new Contact(firstname,lastname,email,phoneNumber)
    setContacts((prevContact=>[...prevContact,newContact]))
    console.table(contacts);
    console.log("ajouter");
    const param = newContact.id
    console.log(param);
    navigate(`/contacts/:${param}`)

   
    
    
}
        

    return (
<>
<h1>Ajout d'un contact</h1>
<form action="#" onSubmit={submitHandler}>
<input type="text" placeholder="Firstname" ref={firstnameRef} />
<input type="text" placeholder="Lastname" ref={lastnameRef} />
<input type="text" placeholder="Email" ref={emailRef} />
<input type="text" placeholder="PhoneNumber" ref={phoneNumberRef} />
<button >Add</button>
</form>

</>
    )
}

export default FormContact