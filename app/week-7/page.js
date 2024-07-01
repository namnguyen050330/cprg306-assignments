"use client";
import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

const Page = () => {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow-md">
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default Page;
