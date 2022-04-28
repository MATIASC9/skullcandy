import {useState, useEffect} from 'react';
import { ItemDetail } from "./ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import { firestoreDb } from '../services/firebase';
import { getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [items, setItem] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getDoc(doc(firestoreDb, 'productos', id)).then((response) => {
      const item = {
        ...response.data(),
        id: response.id
      }
      setItem(item);
    });
  }, [id]);
  return (
      <ItemDetail {...items} />
  );
};

export default ItemDetailContainer;