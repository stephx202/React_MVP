import React, { useEffect, useState } from 'react';
import Title from './Title.jsx';
import Items from './Items.jsx';
import Form from "./Form.jsx";
// const App = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetch("/api/ToDoList")
//       .then((res) => res.json())
//       .then((items) => {
//         setItems(items);
//       });
//   }, []);

//   return (
//     <main>
//       {items.map((items) => (
//         <p className="item" key={items.id}>
//           {items.item}
//         </p>
//       ))}
//     </main>
//   );
// };
function App(){
  const[items, setItems]= useState([])


  const handleNewItem = (newItem) => {
    setItems((prevItems) => [
      ...prevItems,
      newItem
    ]);
  };
  
  return(
    <>
      <Title/>
      <div className='item'>
        <Form onAddItem={handleNewItem}/>
        <Items key={items}/>
      </div>
    </>
  )
}

export default App;
