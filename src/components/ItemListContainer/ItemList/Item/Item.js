import "./Item.css"
export const Item = ({title, price, pictureUrl}) => {
  return (
    <article className="producto">
      <h1 className="producto__titulo">{title}</h1>
      <img className="produco__img" src={pictureUrl} alt={title} />
      <p className="producto__precio">$ {price}</p>
      <button className="producto__btnDetalle">Ver detalle del producto</button>
    </article>
  )
}