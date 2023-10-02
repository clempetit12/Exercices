import { useState } from "react"

const BoutonComponent = (props) => {
    const { object } = props

    const [listingO, setListingO] = useState([])

    const addObjectToList = () => {
        console.log("hello");
        setListingO([...listingO, ])

    }

    return (
<>
<h1>Ajouter des objets</h1>
<hr />
<button onClick={addObjectToList}>Add Object to list </button>
<ul>
    {listingO.map((objet,index)=> <li key={index}>{objet}</li>)}
</ul>
</>
    )
}

export default BoutonComponent