import { createSlice } from "@reduxjs/toolkit";

interface productType {
    id?: string,
    productName: string,
    minimumUnits: number|string,
    maximumUnits: number|string,
    stock: number|string,
    newStock?: number|string,
    quantity?: number,
}

const initialState: productType[] =[ {
    id: "62a45862bc103278050ae1b9",
    productName: "martillo",
    minimumUnits: 4,
    maximumUnits: 20,
    stock: 8
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