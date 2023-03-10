import { createSlice } from "@reduxjs/toolkit";

interface productType {
    id?: string,
    name: string,
    min: number|string,
    max: number|string,
    inventory: number|string,
    newStock?: number|string,
    quantity?: number,
}

const initialState: productType[] =[ {
    id: "62a45862bc103278050ae1b9",
    name: "martillo",
    min: 4,
    max: 20,
    inventory: 8
}]

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        createProduct(state, action){
            state.push(action.payload)
        },
        getAllProducts(state, action){
            return action.payload
        },
        updateProduct(state, action){
            let newState: productType[] = state.map((productSt: productType) => productSt.id === action.payload.id ? action.payload:productSt)
            return newState
        }
    }
})

export default productSlice.reducer
export type { productType}
export const { createProduct, getAllProducts } = productSlice.actions