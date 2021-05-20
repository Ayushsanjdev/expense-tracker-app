import './App.css';
import React, { useState, useRef } from 'react';

function App() {

    let totalExpense = 0;
    const [ count, setCount ] = useState('');
    const printCount = useRef(null);
    const expense = parseInt(count, 10);
    const showValue = () => {
        printCount.current.textContent = totalExpense;
    }

    const handleChange = (e) => {
        setCount(e.target.value);
    }

    return (
        <div className="app">
            <h1 ref={printCount}>{}</h1>
            <input type="number" 
            value={count} 
            onChange={handleChange} />
            <button 
            onClick={showValue}>+</button>
        </div>
    );
}

export default App;
