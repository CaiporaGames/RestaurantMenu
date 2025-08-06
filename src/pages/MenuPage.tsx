import { useParams } from 'react-router-dom';
import { useState } from 'react';
import '../styles/MenuPage.css';
import type { MenuItem } from '../types/MenuItem';

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Burger',
    price: 8.99,
    image: 'https://cdn.pixabay.com/photo/2022/07/15/18/12/cheese-burger-7323674_1280.jpg'
  },
  {
    id: 2,
    name: 'Pizza',
    price: 12.5,
    image: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg'
  },
  {
    id: 3,
    name: 'Soda',
    price: 2.5,
    image: 'https://cdn.pixabay.com/photo/2022/01/16/15/25/orange-6942365_1280.jpg'
  },
  {
    id: 4,
    name: 'Pasta',
    price: 10,
    image: 'https://cdn.pixabay.com/photo/2019/11/19/05/07/oyster-4636451_1280.jpg'
  },
  {
    id: 5,
    name: 'Salad',
    price: 6,
    image: 'https://cdn.pixabay.com/photo/2016/08/09/10/30/tomatoes-1580273_1280.jpg'
  }
];

export default function MenuPage() {
  const { tableId } = useParams<{ tableId: string }>();
  const [order, setOrder] = useState<MenuItem[]>([]);

  const addItem = (item: MenuItem) => setOrder([...order, item]);

  const total = order.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <div className="menu-page">
      <h1>Table #{tableId}</h1>

      <div className="layout">
        {/* Order Summary */}
        <div className="order-section">
          <h2>Order</h2>
          <ul>
            {order.map((item, idx) => (
              <li key={idx}>
                {item.name} - €{item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <p className="total">Total: €{total}</p>
        </div>

        {/* Menu Cards */}
        <div className="menu-grid">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-card">
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3>{item.name}</h3>
              <p>€{item.price.toFixed(2)}</p>
              <button onClick={() => addItem(item)}>Add</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
