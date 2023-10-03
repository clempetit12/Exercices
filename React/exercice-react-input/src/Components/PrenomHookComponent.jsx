import { useState } from "react"

const PrenomHookComponent = () => {

    const [valueInputPrenom, setvalueInputMonPrenom] = useState("")
    const [valueInputNom, setvalueInputMonNom] = useState("")

    const changeValueInputPrenom = (event) => {
        setvalueInputMonPrenom(event.target.value)
    }

    const changeValueInputNom = (event) => {
        setvalueInputMonNom(event.target.value)
    }
    return (
        <>
        <h1>Bienvenue </h1>
        <hr />
        <p>Prénom <input type="text" onInput={changeValueInputPrenom} /></p>
<p>Nom 
<input type="text" onInput={changeValueInputNom} /></p>


<p>"Bonjour {valueInputPrenom.charAt(0).toUpperCase()+valueInputPrenom.slice(1)} {valueInputNom.toUpperCase()}, bienvenue sur l'application !"</p>
        </>
    )
  
}

export default PrenomHookComponent