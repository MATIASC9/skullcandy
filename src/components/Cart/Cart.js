import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let total = 0;
    cart.forEach(item => {
      total += item.quantity * item.price;
    });
    setTotal(total)
  }, [cart]);
  if (cart.length === 0) {
    return (
      <>
        <h2>Your cart is empty</h2>
        <button><Link to='/' style={{ textDecoration: 'none', alignItems: 'center' }}>Ir a productos</Link> </button>
      </>
    );
  }
  return (
    <>
      <h2>Cart</h2>
      <ul>
        {cart.map(item => (
          <ItemCart key={item.id} {...item} removeItem={removeItem} />
        ))}
      </ul>
      <>Total: {total}</>
      <Link to={'/form'}>Continuar compra</Link>
    </>
  );
};
export default Cart;