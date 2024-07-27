import React from 'react';

function Item({ id, name, quantity, category, onDeleteItem }) {
  return (
    <li className="p-4 border-b border-gray-200 flex justify-between items-center">
      <span>
        <span className="font-bold">{name}</span> - {quantity} ({category})
      </span>
      <button
        onClick={() => onDeleteItem(id)}
        className="ml-4 px-2 py-1 text-sm text-white bg-red-500 rounded"
      >
        Delete
      </button>
    </li>
  );
}

export default Item;
