import { useEffect, useState } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import getAllProductsService from '../../services/products/getAllProductsService'
import { getAllProducts, productType } from '../../state/slice/productSlice'
import { RootState } from '../../state/store'
import ListItem from './ListItem'

const ProductList = () => {

    const productStore = useSelector((state: RootState)=> state.product)

    const dispatch = useDispatch()


    useEffect(() => {      
        getAllProductsService().then(            
            (products) => {
                dispatch(getAllProducts(products))
                console.table(productStore)
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
                {productStore.map((productItem: productType, index) =>
                    <ListItem product={productItem} index={index} />
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ProductList