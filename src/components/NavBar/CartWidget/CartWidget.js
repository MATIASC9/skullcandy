import "./CartWidget.css";
const CartWidget = () => {
  return (
    <div className="carrito">
      <img className="carrito__iconoCarrito" src="../images/icono-carrito.svg" alt="icono carrito" />
      <span className="carrito__numeroCarrito">0</span>
    </div>
  );
}
export default CartWidget;