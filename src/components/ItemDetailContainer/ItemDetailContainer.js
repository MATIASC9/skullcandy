import {useState, useEffect} from 'react';
import { getItemsById } from '../../asyncmock';
import { ItemDetail } from "./ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [items, setItem] = useState([]);
  useEffect(() => {
    getItemsById(2).then((item) => {
      setItem(item);
    });
  }, []);
  return (
      <ItemDetail {...items} />
  );
};

export default ItemDetailContainer;