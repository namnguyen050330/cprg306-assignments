"use client";

import { useState } from 'react';
import Item from './item';

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = sortedItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div>
      <div className="mb-4">
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 mr-2 rounded ${sortBy === 'name' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 mr-2 rounded ${sortBy === 'category' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy('group')}
          className={`px-4 py-2 rounded ${sortBy === 'group' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'}`}
        >
          Group by Category
        </button>
      </div>
      {sortBy === 'group' ? (
        Object.keys(groupedItems).map(category => (
          <div key={category} className="mb-4">
            <h2 className="text-xl font-bold mb-2">{category}</h2>
            <ul>
              {groupedItems[category].map(item => (
                <Item
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              ))}
            </ul>
          </div>
        ))
      ) : (
        <ul>
          {sortedItems.map(item => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
