import {useState, useEffect} from 'react';
import { getItems } from '../../asyncmock';
import "./ItemListContainer.css";
import ItemList from "./ItemList/ItemList";

const ItemListContainer = (props) => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    getItems().then((item) => {
      setItem(item);
    });
  }, []);
  return (
    <>
      <h1 className="tituloBienvenida">{props.greeting}</h1>
      <ItemList items={item} />
    </>
  );
};

export default ItemListContainer;