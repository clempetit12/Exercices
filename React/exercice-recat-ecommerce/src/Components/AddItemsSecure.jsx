import { useRef } from "react"
import { useContext, useEffect } from "react"
import ItemContext from "../Context/ItemContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const AddItemsSecure = () => {
    

    const { itemList, setItemList } = useContext(ItemContext)
    const titleRef = useRef()
    const detailsRef = useRef()
    const priceRef = useRef()
    const imageRef=useRef()
    const navigate = useNavigate()
    
    const addArticle = () => {
        const title = titleRef.current.value
        const details = detailsRef.current.value
        const price = Number(priceRef.current.value)
        const url = imageRef.current.value
        axios.post('http://localhost:4444/items',{ title,details,price,url})
            .then(response => {
                console.log(response.data)
                setItemList((prevItem => [...prevItem,response.data]))
                navigate("/")
            })
    }
    const deconnect = () => {
        localStorage.clear('user')
        localStorage.clear('password')
       navigate("/")
    }
    

    return(
<>
<h1 className="display-5 mt-2">Ajout d'un article</h1>
<hr />
<div className="input-group mb-3">
<span class="input-group-text" id="inputGroup-sizing-default">Article</span>
<input type="text"  ref={titleRef} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>

</div>
<div className="input-group mb-3">
<span class="input-group-text " id="inputGroup-sizing-default">Détails article</span>
<input type="text"  ref={detailsRef}  class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>

</div>
<div className="input-group mb-3">
<span class="input-group-text " id="inputGroup-sizing-default">Prix</span>
<input type="text"  ref={priceRef}  class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>

</div>
<div className="input-group mb-3">
<span class="input-group-text " id="inputGroup-sizing-default">Lien Image</span>
<input type="text"  ref={imageRef}  class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>

</div>
<div>
    <button className="btn btn-outline-primary mb-2" onClick={addArticle}>Ajouter Article</button>
</div>

<div>
<button onClick={deconnect} className="btn btn-outline-secondary mb-2">Déconnexion</button>
</div>

</>
    )
}

export default AddItemsSecure