import { useContext, useEffect, useState } from "react"
import ItemContext from "../Context/ItemContext"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const ItemDetails = () => {

    const { itemList, setItemList, basket, setBasket } = useContext(ItemContext)
    const { id } = useParams()
    //const navigate = useNavigate()
    
    const navigate = useNavigate()



    useEffect(() => {
        axios.get(`http://localhost:4444/items/${id}`)
            .then(response => {
                setItemList(response.data)
            })
    }, [id])

    if (!itemList) {
        return <p>Chargement...</p>
    }


    const addBasket = () => {
        const newItem = {...itemList}
        console.log(`article acheté ${newItem.title}${newItem.price}`);
        console.log(newItem);
        setBasket(prev => [...prev, newItem])
        console.log(basket);

        localStorage.setItem("basket", JSON.stringify(newItem))
         navigate("/basket") 
    }
    return (
        <>
            <h1>
                Détails des articles
            </h1>
            <hr />
            <p><b>Nom article : </b>{itemList.title}</p>
            <p><b>Détail article : </b>{itemList.details}</p>
            <p><b>Prix article : </b>{itemList.price}€</p>

            <button onClick={addBasket}>Ajouter au panier</button>
        </>
    )
}

export default ItemDetails