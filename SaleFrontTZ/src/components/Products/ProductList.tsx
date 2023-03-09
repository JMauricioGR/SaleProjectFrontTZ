import { useEffect, useState } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import getAllProductsService from '../../services/products/getAllProductsService'
import { getAllProducts, productType } from '../../state/slice/productSlice'
import { RootState } from '../../state/store'
import ListItem from './ListItem'

const ProductList = () => {

    const productStore = useSelector((state: RootState)=> state.product)

    const dispatch = useDispatch()

    const [ productsResult, setProductsResult] = useState<[productType]>()

    useEffect(() => {
      
        getAllProductsService().then(            
            (products) => {
                dispatch(getAllProducts(products))
                setProductsResult(products)
            }
            
        )
      
    }, [])
    

  return (
    <div>
        <h1>Productos</h1>
        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Disponibles</th>
                    <th>Agregar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {productsResult?(productsResult.map(
                    (provider: productType, index: any) => <tr key={index}><ListItem product={provider} /></tr>
                )):<tr><td>No data</td></tr>}
            </tbody>
        </table>
    </div>
  )
}

export default ProductList