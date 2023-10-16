import { useDispatch, useSelector } from "react-redux"
import ProductItem from "./ProductItem"
import { useEffect } from "react";


const ProductList = () => {

    const productList = useSelector(state=>state.products.products)
    console.table(productList);
    const dispatch = useDispatch()


    useEffect(() => {

            const storedProducts = JSON.parse(localStorage.getItem("products", JSON.stringify(productList)))
            const newproduct = {id: storedProducts.id,name: storedProducts.name, price: storedProducts.price}
            console.log(newproduct);
            
        


    }, [])
    
    return(
        <>
        <table className="table text-center table-hover table-dark">
            <thead>
                <th>Nom</th>
                <th>Prix</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {(productList.length === 0 || productList == null) ? <p>il n'y a pas de produits</p> : productList.map((product,key) =>(<tr><ProductItem product={product} key={key} idProduct={product.id}/></tr>))}
            </tbody>
        </table>

        </>
    )
}

export default ProductList