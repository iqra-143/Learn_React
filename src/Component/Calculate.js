import React from "react";
import { useState } from "react";


export default function Calculate()
{
    const [inputValue,setInputValue]= useState(0);
    const handleClick = (val) => 
    {
        if (val === '=') {
            try {
                
                setInputValue(eval(inputValue));
            } catch (error) {
                
                setInputValue('Error');
            }
        } else {
            
            setInputValue(val);
        }
    };
    return (
        <>
            <input 
                type='text' 
                placeholder='Enter the Value' 
                value={inputValue && inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
            />
            <br />
            <button onClick={() => handleClick('1')}>1</button>
            <button onClick={() => handleClick('2')}>2</button>
            <button onClick={() => handleClick('3')}>3</button>
            <button onClick={() => handleClick('4')}>4</button>
            <button onClick={() => handleClick('5')}>5</button>
            <button onClick={() => handleClick('6')}>6</button>
            <button onClick={() => handleClick('7')}>7</button>
            <button onClick={() => handleClick('8')}>8</button>
            <button onClick={() => handleClick('9')}>9</button>
            <button onClick={() => handleClick('0')}>0</button>
            <button onClick={() => handleClick('+')}>+</button>
            <button onClick={() => handleClick('-')}>-</button>
            <button onClick={() => handleClick('*')}>*</button>
            <button onClick={() => handleClick('/')}>/</button>
            <button onClick={() => handleClick('=')}>=</button>
            <button onClick={() => setInputValue('')}>C</button> 
        </>
    );
}