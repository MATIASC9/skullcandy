import { useState } from 'react';
import "./ItemCount.css";
const ItemCount = ({title, initial, stock, onAdd}) => {
  const [count, setCount] = useState(1);
  const onDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  const onIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  return (
    <div className="contenedorItem">
      <h5 className="contenedorItem__titulo">{title}</h5>
      <div className="contenedorItem__contador">
        <button className="contenedorItem__contador__boton" onClick={onDecrement}>-</button>
        <span className="contenedorItem__contador__cantidad">{count}</span>
        <button className="contenedorItem__contador__boton" onClick={onIncrement}>+</button>
      </div>
      <button className="contenedorItem__btnAgregarAlCarrito" onClick={() => onAdd(count)}>Add to cart</button>
    </div>
  );
};
export default ItemCount;