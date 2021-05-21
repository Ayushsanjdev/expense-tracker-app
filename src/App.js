import React, { useState } from "react";
import "./App.css";

function App() {
  //TODOS
  //take input from user with prompt..
  //show it in the available balance..
  //subtract the expense amount from available balance..

  const [totalExpense, setTotalExpense] = useState(0);
  const [amount, setAmount] = useState("");
  const [item, setItem] = useState("");

  const setExpense = () => {
    setTotalExpense(
      (prevExpense) => parseInt(amount, 10) + prevExpense);
  };

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="app">
      <header>
        <h1>
          Expense Tracker App
        </h1>
      </header>
      <div>
        <p>Available Balance: <span>0</span></p>
        <p>Total Spent: 
            <span> {totalExpense} - {item} </span>
        </p>
      </div>
      <input
        type="text"
        value={amount}
        onChange={handleChange}
        placeholder="Today's expense..."
      />
      <input
        type="text"
        placeholder="Item Name..."
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={setExpense}>➕</button>
    </div>
  );
}

export default App;
