import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addProduct } from "../productsSlice"

const Addproduct = () => {

    const nameRef = useRef()
    const priceRef = useRef()
    const dispatch = useDispatch()
    const productList = useSelector(state=>state.products.products)
    const [nameError, setNameError] = useState(false)
    const [priceError, setPriceError] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
        if (!nameRef.current.value) {
            setNameError(true)
        } if (!priceRef.current.value) {
        setPriceError(true)
        
        }
        console.log(priceRef.current.value);
        const nameAdd = nameRef.current.value
        const priceAdd= priceRef.current.value
        dispatch(addProduct({name: nameAdd,price: priceAdd} ))
        console.log("ajouter produit");
        console.table(productList);
        nameRef.current.value = " "
        priceRef.current.value = " "
        

    }

    return(
        <>
        <h2 className="p-4">Ajouter un produit </h2>
        <hr />
        <form action="#" onSubmit={submitHandler} className="p-2">
          <div className="row p-4">
          <label htmlFor="nom du produit">Nom du produit : </label>
          <input type="text" ref={nameRef} className={`form-control ${nameError ?  "is-invalid" : ""}`} />
          {nameError && <div className="invalid-feedback"> Ce champ est obligatoire </div>}
      </div>
      <div className="row p-4">
          <label htmlFor="prix du produit">Prix du produit : </label>
          <input type="text" ref={priceRef} className={`form-control ${priceError ?  "is-invalid" : ""}`} />
          {priceError && <div className="invalid-feedback"> Ce champ est obligatoire </div>}
      </div>
      <button className="btn btn-success ml-auto">Submit</button>
        </form>
      
        </>
    )
}

export default Addproduct