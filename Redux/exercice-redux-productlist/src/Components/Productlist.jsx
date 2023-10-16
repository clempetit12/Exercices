import { useSelector } from "react-redux"
import ProductItem from "./ProductItem"

const ProductList = () => {

    const productList = useSelector(state=>state.products.products)

    return(
        <>
        <table className="table text-center table-hover table-dark">
            <thead>
                <th>Nom</th>
                <th>Prix</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {productList.map((product,key) =>(<tr><ProductItem product={product} key={key} idProduct={product.id}/></tr>) )}
            </tbody>
        </table>

        </>
    )
}

export default ProductList