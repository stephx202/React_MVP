import React, {useState} from 'react';

//{onAddItem} is the same thing as props.onAddItem
const Form = ({onAddItem})=>{
    const [newItem, setNewItem]= useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        fetch("api/ToDoList",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({item: newItem}),
        })
        .then((response)=>{
            if(!response.ok){
                throw new Error('failed to add new item in component side.' + response.statusText);
            }
            return response.json();
        })
        .then((newItemData)=>{
            onAddItem(newItemData);
            //clears the input box after new item being submitted;p41
            setNewItem('');
        })
        .catch((error)=>{
            console.error('Error adding new item in the component side.', error)
        })

    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input id="input"
                type="text"
                value={newItem}
                onChange={(e)=> setNewItem(e.target.value)}
                placeholder="Add new item"
            />
            <button id="button" type="submit">Add</button>
        </form>
    );
};
export default Form