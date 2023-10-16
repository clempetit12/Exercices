import { useDispatch, useSelector } from "react-redux"
import { deleteProduct, updateProduct } from "../productsSlice"
import { useRef, useState } from "react"

const ProductItem = (props) => {

    const [inputVisible, setInputVisible] = useState(false)
    const product = props.product


    const dispatch = useDispatch()
    const updatedDataRefName = useRef()
    const updatedDataRefPrice = useRef()


const handleData = () => {
    console.log("handledata");
    const updatedData = updatedDataRefName.current.value
    console.log(updatedData);
    dispatch(updateProduct({id: product.id, name : updatedData, price : updatedDataRefPrice.current.value}))
    setInputVisible(false)
}
        
        
    

    return(
        <>
        <td>{product.name}</td>
        <td>{product.price}€</td>
        <td><button className="btn btn-success m-2" onClick={() => setInputVisible(true)}>Modifier le produit</button> 
        {inputVisible && (
                            <>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    ref={updatedDataRefName}


                                />
                                 <input
                                    type="text"
                                    placeholder="Price"
                                    ref={updatedDataRefPrice}


                                />
                                <button className='btn btn-outline-primary' onClick={() => handleData(product.id)} >Confirmer</button>

                            </>

                        )}<button className="btn btn-danger" onClick={() => dispatch(deleteProduct(product.id))}>Supprimer</button></td>
        </>
    )
}

export default ProductItem