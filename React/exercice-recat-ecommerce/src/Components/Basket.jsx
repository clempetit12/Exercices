import { useContext } from "react"
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



    return(
<>
<h1>Panier</h1>
<hr />
<ul>
 {basket.map((item,index)=> <div><li key={index}> {item.title} {item.price}€</li></div>)} 
</ul>
<p>Total : {somme}</p>
<Link to={"/"}>Ajouter des articles au panier</Link>

</>
    )
}

export default Basket

