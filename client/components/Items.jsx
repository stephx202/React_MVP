import React, { useState, useEffect } from 'react';
import { RiCloseCircleLine} from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

//declares functional component.
const Items = () => {
  const [items, setItems] = useState([]);
//GET DATA when the component mounts
  useEffect(() => {
    fetch("/api/ToDoList")
      .then((res) => res.json())
      .then((data) => {
        // Add a "crossedOff" property to each item
        const itemsWithCrossedOff = data.map((item) => ({
          ...item,
          crossedOff: false,
        }));
        //update the state with the modified items
        setItems(itemsWithCrossedOff);
      });
  }, []); //add an empty array so that this effect runs only once.

  //function to toggle the crossedOff property when an item is clicked
  const completedItem = (itemId) => { 
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
        //update the state by using .filter to take out deleted item
        setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
        console.log(`Deleted item ${itemId}`);
      } else {
        console.error(`Unable to delete item  ${itemId}`);
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