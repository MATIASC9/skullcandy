export const Item = ({title, price, pictureUrl}) => {
  return (
    <article>
      <h1>{title}</h1>
      <img src={pictureUrl} alt={title} />
      <p>$ {price}</p>
      <button>Ver detalle del producto</button>
    </article>
  )
}