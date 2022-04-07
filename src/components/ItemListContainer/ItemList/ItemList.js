import { Item } from "./Item/Item";
const ItemList = ({items}) => {
  return (
    <article>
      {items.map((item) => <Item key={item.id} {...item} />)}
    </article>
  )
};
export default ItemList