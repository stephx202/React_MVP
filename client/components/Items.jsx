import React, { useState, useEffect } from 'react';
import { RiCloseCircleLine} from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

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

  const completedItem = (itemId) => {
    // Toggle the crossedOff property when an item is clicked
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, crossedOff: !item.crossedOff } : item
      )
    );
  };

  return (
    <main>
    {items.map((item) => (
        <div key={item.id} className={`item ${item.crossedOff ? 'crossed-off' : ''}`} onClick={() => completedItem(item.id)}>
          {item.item}
          <div className="icons">
            <RiCloseCircleLine />
            <IoMdCheckmarkCircleOutline />
          </div>
        </div>
    ))}
  </main>
  );
};

export default Items;