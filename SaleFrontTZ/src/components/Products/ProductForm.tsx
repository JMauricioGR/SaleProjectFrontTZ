import { useState } from "react"
import { useDispatch } from "react-redux"
import addProductService from "../../services/products/addProductService"

const ProductForm = () => {

  const dispatch = useDispatch()

  const [productSt, setProductST] = useState<string>("")
  const [minimoSt, setMinimoSt] = useState<number>()
  const [maximoST, setMaximoST] = useState<number>()
  const [inventorySt, setInventorySt] = useState<number>()
  const [enabledST, setEnabledST] = useState<boolean>(false)

  const onProductChange = (e: React.ChangeEvent<HTMLInputElement>) => setProductST(e.target.value)
  const onMinChange = (e: React.ChangeEvent<HTMLInputElement>) => setMinimoSt(parseInt(e.target.value))
  const onMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => setMaximoST(parseInt(e.target.value))
  const onInventoryChange = (e: React.ChangeEvent<HTMLInputElement>) => setInventorySt(parseInt(e.target.value))
  const onEnabledChange = (e: React.ChangeEvent<HTMLInputElement>) => setEnabledST(e.target.checked)
  

  const createProduct = (e: React.FormEvent<HTMLButtonElement>) =>{
    e.preventDefault()
    
    addProductService(productSt, inventorySt as number, enabledST, minimoSt as number, maximoST as number, dispatch)
    setProductST("")
    setMinimoSt(0)
    setMaximoST(0)
    setInventorySt(0)
    setEnabledST(false)
  }

  return (
    <div>
        <form action="">
            <label htmlFor="">
                Producto:
                <input type="text" 
                name="productName" 
                id="productName" 
                value={productSt}
                onChange={onProductChange}/>
            </label>
            <label htmlFor="">
                Mínimo:
                <input type="text" 
                name="productMin" 
                id="productName" 
                value={minimoSt}
                onChange={onMinChange}/>
            </label>
            <label htmlFor="">
                Máximo:
                <input type="text" 
                name="productMax" 
                id="productName" 
                value={maximoST}
                onChange={onMaxChange}/>
            </label>
            <label htmlFor="">
                Inventario:
                <input type="text" 
                name="productInventory" 
                id="productName" 
                value={inventorySt}
                onChange={onInventoryChange}/>
            </label>  
            <label htmlFor="">
                Habilitado:
                <input type="checkbox" 
                name="productEnabled" 
                id="productName" 
                value="true"                
                onChange={onEnabledChange}/>
            </label>
            <button onClick={createProduct}>Agregar</button>
        </form>
        <p>{enabledST}</p>
    </div>
  )
}

export default ProductForm