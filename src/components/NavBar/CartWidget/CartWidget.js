import "./CartWidget.css";
import { useContext } from 'react';
import CartContext from "../../../context/CartContext";
const CartWidget = () => {
  const { getQuantity } = useContext(CartContext)

  return (
    <div className="carrito">
      <img className="carrito__iconoCarrito" src="../images/icono-carrito.svg" alt="icono carrito" />
      <span className="carrito__numeroCarrito">{ getQuantity() }</span>
    </div>
  );
}
export default CartWidget;