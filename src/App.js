// App.js
import React from 'react';
import { useState } from 'react';
import TodoProject  from './Component/TodoProject';
import Dictionary from './Component/Dictionary';
import Calculate from './Component/Calculate';
import './App.css';



function App() {
  const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist',
    'Subrahmanyan Chandrasekhar: trophysicist'
  ];
  const [listItems, setListItems] = useState([]);

  return (
    <>
      <button onClick={() => {
        const items = people.map((person) => (
          <li>{person}</li>
        ));
        setListItems(items);
      }}>Click me</button>

      <ul>{listItems}</ul>

      <h1 className='Todo'>TODO LIST</h1>
        <TodoProject/>
        <hr />
       <h1 className='Todo'>Free Dictionary</h1>
        <Dictionary/>
        <Calculate/>
       
    </>
  );
}

export default App;
