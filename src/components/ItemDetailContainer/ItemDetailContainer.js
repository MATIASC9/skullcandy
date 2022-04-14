import {useState, useEffect} from 'react';
import { getItemsById } from '../../asyncmock';
import { ItemDetail } from "./ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [items, setItem] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getItemsById(id).then((item) => {
      setItem(item);
    });
  }, [id]);
  return (
      <ItemDetail {...items} />
  );
};

export default ItemDetailContainer;