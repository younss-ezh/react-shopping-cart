import { createSlice } from '@reduxjs/toolkit' ;

const cardSlice = createSlice({
    name: 'card',
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCard: false
    },
    reducers: {
        addToCard(state, action) {
            const newItem = action.payload

            const existingItem = state.itemsList.find((item) => item.id === newItem.id)

            if(existingItem){
                existingItem.quantity++
                existingItem.totalPrice += newItem.price
            } else {
                state.itemsList.push(
                  {  
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    totalPrice: newItem.price,
                    quantity: 1
                }) 

                state.totalQuantity++ 
            }

        },
        removeFromCard(state, action) {
            const id = action.payload

            const existingItem = state.itemsList.find((item) => item.id === id)

            if(existingItem.quantity === 1) {
                state.itemsList = state.itemsList.filter(item => item.id !== id)
                state.totalQuantity--
            } else {
                existingItem.quantity-- 
                existingItem.totalPrice -= existingItem.price
            }
        },
        setShowCard(state) {
            state.showCard = !state.showCard
        },
    }
})



export const cardActions = cardSlice.actions

export default cardSlice ;