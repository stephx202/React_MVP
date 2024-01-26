import React, {useState, useEffect} from 'react';



const Items = () => {
    const [item, setItem] = useState([]);
  
    useEffect(() => {
      fetch("/api/ToDoList")
        .then((res) => res.json())
        .then((item) => {
          setItem(item);
        });
    }, []);
  
    return (
      <main>
        {item.map((item) => (
          <p className="item" key={item.id} onClick={()=>alert(`click${item.id}`)}> {item.item}</p>
        ))}
      </main>
    );
  };

export default Items