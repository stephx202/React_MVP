import React, { useState, useEffect } from 'react';
import { RiCloseCircleLine} from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Items = () => {
  const [items, setItems] = useState([]);
//GET DATA
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

  //DELETE DATA
  const deleteItem=(itemId)=>{
    fetch(`/api/ToDoList/${itemId}`,{
      method:'DELETE',
    })
    .then((res)=>{
      if (res.ok) {
        setItems((prevItems) => prevItems((item) => item.id !== itemId));
        console.log(`Successfully deleted item with ID ${itemId}`);
      } else {
        console.error(`Failed to delete item with ID ${itemId}`);
      }
    })
  }



  return (
    <main>
    {items.map((item) => (
        <div key={item.id} className={`item ${item.crossedOff ? 'crossed-off' : ''}`}>
          {item.item}
          <div className="icons">
            <RiCloseCircleLine onClick={()=> deleteItem(item.id)}/>
            <IoMdCheckmarkCircleOutline onClick={() => completedItem(item.id)} />
          </div>
        </div>
    ))}
  </main>
  );
};

export default Items;