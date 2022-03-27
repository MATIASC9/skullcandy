import "./style.css"
const ItemListContainer = (props) => {
  return (
    <h1 className="tituloBienvenida">{props.greeting}</h1>
  );
};

export default ItemListContainer;