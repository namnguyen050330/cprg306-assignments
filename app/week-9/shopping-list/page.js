"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import NewItem from './new-item';
import ItemList from './item-list';
import { useUserAuth } from '../_utils/auth-context'; 
import { getItems, addItem, deleteItem } from "../_services/shopping-list-service";

const Page = () => {
  const [items, setItems] = useState([]);
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login"); // Adjust the route to your login page
    }
  }, [user, router]);

  useEffect(() => {
    if (user && user.uid) {
      loadItems();
    }
  }, [user]);

  const loadItems = async () => {
    try {
      const items = await getItems(user.uid);
      setItems(items);
    } catch (error) {
      console.error("Error loading items: ", error);
    }
  };

  const handleAddItem = async (newItem) => {
    try {
      const id = await addItem(user.uid, newItem);
      setItems(prevItems => [...prevItems, { id, ...newItem }]);
    } catch (error) {
      console.error("Error adding item: ", error);
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      await deleteItem(user.uid, itemId);
      setItems(prevItems => prevItems.filter(item => item.id !== itemId));
    } catch (error) {
      console.error("Error deleting item: ", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
      router.push("/login"); // Adjust the route to your login page
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  if (!user) {
    return null; 
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
        <button onClick={handleLogout} className="mb-4 py-2 px-4 bg-red-500 text-white rounded">
          Logout
        </button>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onDeleteItem={handleDeleteItem} />
      </div>
    </div>
  );
};

export default Page;
