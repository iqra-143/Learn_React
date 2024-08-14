import {useState} from 'react'
import './App.css';

function App() {
 
 

  const [counter,setCounter] = useState()
  const [name, setName] = useState('Iqra');

  // Function to change the name to 'Humna'
  const changeName = () => {
    setName('Humna');
  };

  return (

   <>
    <h1>Text Area</h1>
    <textarea value={counter} onChange={(e)=> {
      console.log(e.target.value)
      setCounter(e.target.value)}}>
        
    </textarea>
    <div>
      
      {counter}

    </div>
  <div>
  <h1>Hello, my name is {name}</h1>
  <button onClick={changeName}>Change Name</button>
</div>
   </>

  )
}

export default App;

