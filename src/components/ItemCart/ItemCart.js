import { useContext } from "react";
import CartContext from "../../context/CartContext";
const ItemCart = ({ id, name, price, quantity }) => {
  const {removeItem } = useContext(CartContext);
  return (
    <>
      <li key={id}>
        {name}
        Cantidad: {quantity}
        Precio Unitario: {price}
        Subtotal: {quantity * price}
        <button onClick={() => removeItem(id)}>Remove</button>
      </li>
    </>
  );
}
export default ItemCart;