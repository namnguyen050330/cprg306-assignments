import React from 'react';

function Item({ name, quantity, category }) {
  return (
    <li className="p-4 border-b border-gray-200">
      <span className="font-bold">{name}</span> - {quantity} ({category})
    </li>
  );
}

export default Item;
