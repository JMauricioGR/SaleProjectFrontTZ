import { productType } from '../../state/slice/productSlice'

const ListItem = (props:{product: productType}) => {
  return (
    <>
        <td>{props.product.productName}</td>
        <td>{props.product.stock}</td>
        <td><button>+</button></td>
        <td><button>X</button></td>
        {console.table(props.product.id)}
    </>
  )
}

export default ListItem