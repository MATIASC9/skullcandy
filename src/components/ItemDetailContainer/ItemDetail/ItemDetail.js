import { useState } from "react";
import ItemCount from "../../ItemListContainer/ItemList/Item/ItemCount/ItemCount";
import { Link } from "react-router-dom";
// import { AddToCart } from "../../ItemListContainer/ItemList/Item/ItemCount/AddToCart/AddToCart";
import "../../ItemListContainer/ItemList/Item/ItemCount/ItemCount.css";
import "./ItemDetail.css";
export const ItemDetail = ({title, price, pictureUrl, description, stock}) => {
  const [quantity, setQuantity] = useState(0);
  const handleOnAdd = (count) => {
    console.log("Agregar al carrito");
    setQuantity(count);
  };

  return (
    <article className="item">
      <img className="item__img" src={pictureUrl} alt={title} />
      <div className="item__detalles">
        <h1 className="item__detalles__titulo">{title}</h1>
        <p className="item__detalles__descripcion">{description}</p>
        <p className="item__detalles__precio">$ {price}</p>
      {quantity > 0 ? <Link className="contenedorItem__btnAgregarAlCarrito" to='/cart'>Ir al carrito</Link> : <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />}
      </div>
    </article>
  )
}