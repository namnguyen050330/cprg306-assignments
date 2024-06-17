"use client";

import { useState } from 'react';
import Item from './item';
import items from './items.json';
export default function ItemList() {
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
      <div>
        <button
          onClick={() => setSortBy('name')}
          style={{ backgroundColor: sortBy === 'name' ? 'lightblue' : 'white' }}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          style={{ backgroundColor: sortBy === 'category' ? 'lightblue' : 'white' }}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy('group')}
          style={{ backgroundColor: sortBy === 'group' ? 'lightblue' : 'white' }}
        >
          Group by Category
        </button>
      </div>
      {sortBy === 'group' ? (
        Object.keys(groupedItems).map(category => (
          <div key={category}>
            <h2>{category}</h2>
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
