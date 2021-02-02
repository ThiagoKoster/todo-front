import React, { useEffect, useState } from 'react';
import Item from '../components/Item';
import * as apiClient from '../util/TodoApiClient';

export default function Home() {
  const { items: returnedItems, error } = apiClient.getItems();

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (returnedItems) {
      setItems(returnedItems);
    }
  });
  if (error) return <h1>Something went wrong!</h1>;
  if (!returnedItems) return <h1>Loading...</h1>;

  return (
    <div className="container">
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
}
