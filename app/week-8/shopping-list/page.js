"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json'; // Corrected the import path
import { useUserAuth } from '../_utils/auth-context'; // Adjust the import path

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/week-8"); // Redirect to the landing page if not logged in
    }
  }, [user, router]);

  if (!user) {
    return null; // Render nothing while redirecting
  }

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
      router.push("/week-8");
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
        <button onClick={handleLogout}>Logout</button>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default Page;
