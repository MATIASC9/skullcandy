import "./ItemDetail.css";
export const ItemDetail = ({title, price, pictureUrl, description}) => {
  return (
    <article className="item">
      <img className="item__img" src={pictureUrl} alt={title} />
      <div className="item__detalles">
        <h1 className="item__detalles__titulo">{title}</h1>
        <p className="item__detalles__descripcion">{description}</p>
        <p className="item__detalles__precio">$ {price}</p>
      </div>
    </article>
  )
}