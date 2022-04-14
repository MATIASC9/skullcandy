import ItemCount from './ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import "./Item.css"
export const Item = ({id, title, price, pictureUrl}) => {
  return (
    <article className="producto">
      <h1 className="producto__titulo">{title}</h1>
      <img className="produco__img" src={pictureUrl} alt={title} />
      <p className="producto__precio">$ {price}</p>
      <ItemCount stock={25} title={title} />
      <Link to={`/detail/${id}`} className="producto__btnDetalle">Product details</Link>
    </article>
  )
}