import { createProduct } from "../../state/slice/productSlice"

const addProductService =async (name:string,
    inventory: number,
    enabled: boolean,
    min: number,
    max: number, dispatch:any) => {

        const requestBody={
            name,
            inventory,
            enabled,
            min,
            max
        }

        let response = await fetch('http://localhost:8080/v1/api/products/create',{
          method:'POST',
          headers:{"content-type":"application/json"},
          body: JSON.stringify(requestBody)
        })

        let result = await response.json()
        dispatch(createProduct(result))
}

export default addProductService