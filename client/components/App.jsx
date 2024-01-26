import React, { useEffect, useState } from 'react';
import Title from './Title.jsx';
import Items from './Items.jsx';

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
  return(
    <>
      <Title/>
      <div className='item'>
        <Items/>
      </div>
    </>
  )
}

export default App;
