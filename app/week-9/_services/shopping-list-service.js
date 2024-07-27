import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  const itemsCol = collection(db, `users/${userId}/items`);
  const itemsSnapshot = await getDocs(query(itemsCol));
  const itemsList = itemsSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  return itemsList;
};

export const addItem = async (userId, item) => {
  const itemsCol = collection(db, `users/${userId}/items`);
  const docRef = await addDoc(itemsCol, item);
  return docRef.id;
};
