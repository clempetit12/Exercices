const { createSlice } = require("@reduxjs/toolkit")

const courseSlice = createSlice(
    {
     name:"articles",
     initialState: {
         articles :[],
         counterArticles: 1,
         selectedArticle : null
         
 
     },
     reducers: {

        setSelectedArticle : (state,action) => {
            state.selectedArticle= action.payload
        } ,
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


export const {addItemToBasket, deleteArticle, setSelectedArticle} = courseSlice.actions
export default courseSlice.reducer