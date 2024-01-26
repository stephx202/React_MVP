import React, { useEffect, useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/ToDoList");
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
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

export default App;
