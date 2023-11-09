const { createSlice } = require("@reduxjs/toolkit")

const courseSlice = createSlice(
    {
     name:"articles",
     initialState: {
         articles :[  {
            "id": 1,
            "itemName": "lait",
            "price": 1.5,
            "quantity": 2
        }],
         counterArticles: 1,
         
 
     },
     reducers: {
        addItemToBasket: (state, action) => {
const newItem = {id: Date.now(),itemName: action.payload.itemName, price: action.payload.price, quantity: action.payload.quantity}
state.counterArticles++
state.articles.push(newItem)


        },
        deleteArticle: (state, action) => {
state.articles = state.articles.filter(a => a.id !== action.payload)
state.counterArticles--
        },

    },
})


export const {addItemToBasket, deleteArticle} = courseSlice.actions
export default courseSlice.reducer