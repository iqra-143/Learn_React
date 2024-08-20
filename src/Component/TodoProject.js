import { useState } from "react";

import React from "react";
import '../App.css';

const TodoProject = () => {
    const [inputValue, setInputValue] = useState("");  
    const [itemValue, setItemValue] = useState([]);    
    const AddItem = () => {
        if (inputValue.trim() !== "") {
            setItemValue([...itemValue, inputValue]);  
            setInputValue(""); 
        }
    };
    const handleDelete = (index) => {
        setItemValue(itemValue.filter((_  , i) => i !== index));
    };
    const handleEdit = (index) => {
        const newValue = prompt("Edit item:", itemValue[index]);
        if (newValue !== null && newValue.trim() !== "") {
            const updatedItems = itemValue.map((item, i) =>
                i === index ? newValue : item
            );
            setItemValue(updatedItems);
        }
    };
  
    return (
        <>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Add Item"
                    className="input"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>
            <div className="button">
                <button onClick={AddItem}>Add</button>  
            </div>
            <div className="item-container">
                {itemValue.map((item, index) => (
                    <div key={index} className="item">
                        {item}
                        <button className="del" onClick={() => handleDelete(index)}>Delete</button>
                        <button className="edit" onClick={() => handleEdit(index)}>Edit</button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TodoProject;
