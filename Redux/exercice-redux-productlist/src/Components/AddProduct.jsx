import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addProduct } from "../productsSlice"

const Addproduct = () => {

    const nameRef = useRef()
    const priceRef = useRef()
    const dispatch = useDispatch()
    const productList = useSelector(state=>state.products.products)

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(priceRef.current.value);
        const nameAdd = nameRef.current.value
        const priceAdd= priceRef.current.value
        dispatch(addProduct({name: nameAdd,price: priceAdd} ))
        console.log("ajouter produit");
        console.table(productList);
    }

    return(
        <>
        <h2 className="p-4">Ajouter un produit </h2>
        <hr />
        <form action="#" onSubmit={submitHandler} className="p-2">
          <div className="row p-4">
          <label htmlFor="nom du produit">Nom du produit</label>
          <input type="text" ref={nameRef} />
      </div>
      <div className="row p-4">
          <label htmlFor="prix du produit">Prix du produit</label>
          <input type="text" ref={priceRef} />
      </div>
      <button className="btn btn-success ml-3">Submit</button>
        </form>
      
        </>
    )
}

export default Addproduct