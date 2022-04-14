import {useState, useEffect} from 'react';
import { getItems } from '../../asyncmock';
import "./ItemListContainer.css";
import ItemList from "./ItemList/ItemList";
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getItems(id).then((item) => {
      setItem(item);
    });
  }, [id]);
  return (
    <>
      <h1 className="tituloBienvenida">{props.greeting}</h1>
      <ItemList items={item} />
    </>
  );
};

export default ItemListContainer;