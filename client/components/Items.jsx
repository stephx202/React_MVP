import React, {useState, useEffect} from 'react';



const Items = () => {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch("/api/ToDoList")
        .then((res) => res.json())
        .then((items) => {
          setItems(items);
        });
    }, []);
  
    return (
      <main>
        {items.map((items) => (
          <p className="item" key={items.id}>
            {items.item}
          </p>
        ))}
      </main>
    );
  };

export default Items