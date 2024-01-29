import React, { useState, useEffect } from 'react';

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/api/ToDoList")
      .then((res) => res.json())
      .then((data) => {
        // Add a "crossedOff" property to each item
        const itemsWithCrossedOff = data.map((item) => ({
          ...item,
          crossedOff: false,
        }));
        setItems(itemsWithCrossedOff);
      });
  }, []);

  const handleItemClick = (itemId) => {
    // Toggle the crossedOff when an item is clicked
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, crossedOff: !item.crossedOff } : item
      )
    );
  };

  return (
    <main>
      {items.map((item) => (
        <p
          className={`item ${item.crossedOff ? 'crossed-off' : ''}`}
          key={item.id}
          onClick={() => handleItemClick(item.id)}
        >
          {item.item}
        </p>
      ))}
    </main>
  );
};

export default Items;