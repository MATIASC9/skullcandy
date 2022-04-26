import { useContext } from "react";
import ItemCount from "../../ItemListContainer/ItemList/Item/ItemCount/ItemCount";
import { Link } from "react-router-dom";
// import { AddToCart } from "../../ItemListContainer/ItemList/Item/ItemCount/AddToCart/AddToCart";
import "../../ItemListContainer/ItemList/Item/ItemCount/ItemCount.css";
import CartContext from '../../../context/CartContext'
import "./ItemDetail.css";
export const ItemDetail = ({ id, title, price, pictureUrl, description, stock }) => {
  const { addItem, isInCart } = useContext(CartContext)
  const handleAdd = (count) => {
    const productObj = {
      id, title, price, quantity: count
    }

    addItem(productObj)
  }

  return (
    <article className="item">
      <img className="item__img" src={pictureUrl} alt={title} />
      <div className="item__detalles">
        <h1 className="item__detalles__titulo">{title}</h1>
        <p className="item__detalles__descripcion">{description}</p>
        <p className="item__detalles__precio">$ {price}</p>
        { isInCart(id) ? <Link to='/cart'>Go to cart</Link> : <ItemCount onAdd={handleAdd} stock={stock}/> }
        { isInCart(id) ? <button><Link to='/cart'>Finalizar compra</Link></button> : "" }
      </div>
    </article>
  )
}