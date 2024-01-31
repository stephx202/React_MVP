import React, { useEffect, useState } from 'react';
import Title from './Title.jsx';
import Items from './Items.jsx';
import Form from "./Form.jsx";
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
        <Form className="form" onAddItem={handleNewItem}/>
        <Items key={items}/>
    </>
  )
}

export default App;
