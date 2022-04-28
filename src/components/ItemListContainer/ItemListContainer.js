import {useState, useEffect} from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { firestoreDb } from '../services/firebase';
import "./ItemListContainer.css";
import ItemList from "./ItemList/ItemList";
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const collectionRef = id
      ? query(collection(firestoreDb, 'productos'), where('category', '==', id))
      : collection(firestoreDb, 'productos');
    getDocs(collectionRef).then((response) => {
      const item = response.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id
        }
      });
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