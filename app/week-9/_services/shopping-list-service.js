import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

export const getItems = async (userId) => {
  const itemsCol = collection(db, `users/${userId}/items`);
  const itemsSnapshot = await getDocs(itemsCol);
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

export const deleteItem = async (userId, itemId) => {
  const itemRef = doc(db, `users/${userId}/items/${itemId}`);
  await deleteDoc(itemRef);
};
