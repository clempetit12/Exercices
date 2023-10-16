const { createSlice } = require("@reduxjs/toolkit")

const productsSlice = createSlice(
   {
    name:"products",
    initialState: {
        products :[{id: 1,name: "pomme", price:1.5}],
        counterProducts: 1,
        isInputVisible : false

    },
    reducers: {
        addProduct: (state, action) => {
const newProduct = {id: Date.now(),name: action.payload.name, price: action.payload.price}
state.products.push(newProduct)
state.counterProducts++
        },
        deleteProduct: (state, action) => {
state.products = state.products.filter(p => p.id !== action.payload)
state.counterProducts--

        },
        updateProduct: (state, action) => {
            console.log("update");
const newproductlist = state.products.map((p => p.id === action.payload.id ? {id: p.id,name: action.payload.name, price: action.payload.price} : p))
console.log(newproductlist);
state.products = newproductlist
console.table(state.products);



        },
    }
   } 
)

export const {addProduct, deleteProduct, updateProduct} = productsSlice.actions
export default productsSlice.reducer
    
