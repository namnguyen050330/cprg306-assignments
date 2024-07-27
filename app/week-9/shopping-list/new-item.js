import { useState } from 'react';

const NewItem = ({ onAddItem }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('Produce');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !quantity || !category) return;

    onAddItem({ name, quantity, category });
    setName('');
    setQuantity(1);
    setCategory('Produce');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-2 p-2 border rounded w-full"
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="mb-2 p-2 border rounded w-full"
        required
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="mb-2 p-2 border rounded w-full"
        required
      >
        <option value="Produce">Produce</option>
        <option value="Bakery">Bakery</option>
        <option value="Meat">Meat</option>
        <option value="Dairy">Dairy</option>
        <option value="Household">Household</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded">
        Add Item
      </button>
    </form>
  );
};

export default NewItem;
