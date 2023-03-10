import { productType } from '../../state/slice/productSlice'

const ListItem = (props:{product: productType, index: any}) => {
  return (
    <tr>
        <td>{props.product.name}</td>
        <td>{props.product.inventory}</td>
        <td><button>+</button></td>
        <td><button>X</button></td>
    </tr>
  )
}

export default ListItem