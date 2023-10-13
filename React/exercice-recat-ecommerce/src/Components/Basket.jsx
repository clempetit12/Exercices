import { useContext, useEffect } from "react"
import ItemContext from "../Context/ItemContext"
import { Link, useParams } from "react-router-dom"


const Basket = () => {

    const {id} = useParams
    
 
    const { itemList, setItemList, basket, setBasket } = useContext(ItemContext)
console.table(basket);

const valeurs = basket.map(item=>item.price)
console.log(valeurs);
const somme = valeurs.reduce((total, valeur)=> total + valeur,0)
console.log(somme); 

const deleteItem = (e) => {
const itemDelet = {...basket}
console.log("itemDelete"+itemDelet);
setBasket(prevItem => prevItem.filter(b => b !== itemDelet))
console.log("itemdelete "+itemDelet);
console.log(basket);
}




    return(
<>
<h1>Panier</h1>
<hr />
<ul>
 {basket.map((item,index)=> <div><li key={index}> <b>Article :</b> {item.title} -- <b>Prix : </b>{item.price}€</li> <button className="btn btn-outline-danger" onClick={deleteItem}>Delete</button></div>)} 
</ul>
<p className="display-6 text-end fw-bold" >Total : {somme} €</p>
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
<Link to={"/"} className="btn btn-success  mb-3"type="button"><i class="bi bi-patch-plus"></i> Ajouter des articles au panier</Link>
</div>


</>
    )
}

export default Basket

