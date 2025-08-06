// src/pages/MenuPage.tsx
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import '../styles/MenuPage.css';
import type { MenuItem } from '../types/MenuItem';

const menuItems: MenuItem[] = [
  { id: 1, name: 'Burger', price: 8.99 },
  { id: 2, name: 'Pizza', price: 12.5 },
  { id: 3, name: 'Soda', price: 2.5 },
];

export default function MenuPage() {
  const { tableId } = useParams<{ tableId: string }>();
  const [order, setOrder] = useState<MenuItem[]>([]);

  const addItem = (item: MenuItem) => {
    setOrder((prev) => [...prev, item]);
  };

  const total = order.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="menu-container">
      <h2>Table #{tableId}</h2>
      <h3>Menu</h3>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - €{item.price.toFixed(2)}
            <button onClick={() => addItem(item)}>Add</button>
          </li>
        ))}
      </ul>

      <h3>Your Order</h3>
      <ul>
        {order.map((item, idx) => (
          <li key={idx}>
            {item.name} - €{item.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p><strong>Total: €{total}</strong></p>
    </div>
  );
}
