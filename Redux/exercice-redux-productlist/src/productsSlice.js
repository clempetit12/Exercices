const { createSlice } = require("@reduxjs/toolkit")

const productsSlice = createSlice(
   {
    name:"products",
    initialState: {
        products :[],
        counterProducts: 1,
        isInputVisible : false,
        data:null,
        

    },
    reducers: {
        addProduct: (state, action) => {
const newProduct = {id: Date.now(),name: action.payload.name, price: action.payload.price}
state.counterProducts++
state.products.push(newProduct)
localStorage.setItem("products", JSON.stringify(newProduct))


        },
        deleteProduct: (state, action) => {
state.products = state.products.filter(p => p.id !== action.payload)
state.counterProducts--

        },
        updateProduct: (state, action) => {
            console.log("update");
const newproductlist = state.products.map((p => p.id === action.payload.id ? {id: p.id,name: action.payload.name || p.name, price: action.payload.price || p.price} : p))
console.log(newproductlist);
state.products = newproductlist
console.table(state.products);



        },
      
    }
   } 
)

export const {addProduct, deleteProduct, updateProduct, loadFromLocalStorage} = productsSlice.actions
export default productsSlice.reducer
    
