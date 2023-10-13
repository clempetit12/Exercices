import { useContext, useEffect, useState } from "react"
import ItemContext from "../Context/ItemContext"
import { Link, useParams } from "react-router-dom"


const Basket = () => {
    
 
    const {  basket, setBasket } = useContext(ItemContext)

console.table(basket);

useEffect(() => {
  if (basket.length == 0 || basket == null ){
    const storedBasket = JSON.parse(localStorage.getItem("basket", JSON.stringify(basket)))
    setBasket(storedBasket)
  } else {
    localStorage.setItem("basket", JSON.stringify(basket));
    const storedItems = JSON.parse(localStorage.getItem('basket'));
    if (storedItems) {
        setBasket(storedItems);
      }
  }
    

},[])

  const addItemToBasket = (item) => {
    // Add an item to the basket
    setBasket(previtem => [...previtem, item]);

  };


const valeurs = basket.map(item=>item.price)
console.log(valeurs);
const somme = valeurs.reduce((total, valeur)=> total + valeur,0)
console.log(somme);

const deleteItem = (itemToDelete) => {
  const updatedBasket =  basket.filter(item => item !== itemToDelete)
setBasket(updatedBasket)
console.log(basket);
localStorage.setItem("basket",JSON.stringify(updatedBasket))
}

    return ( 
<>
<h1>Panier</h1>
<hr />
{basket.map((item, index) => (<div>   <li key={index}>
          {item.title} - {item.price}€
        </li> <button className="btn btn-outline-danger" onClick={()=>deleteItem(item)}>Delete</button></div>
     
      ))}
<p className="display-6 text-end fw-bold" >Total : {somme} €</p>
<div class="d-grid gap-2 d-md-flex justify-content-md-end">
<Link to={"/"} onClick={() => addItemToBasket} className="btn btn-success  mb-3"type="button"><i class="bi bi-patch-plus"></i> Ajouter des articles au panier</Link>
</div> 

</>)}



export default Basket

