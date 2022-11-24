import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnterTitled] = useState("");
  const [enteredAmount, setEnterAount] = useState("");
  const [enteredDate, setEnterDate] = useState("");

  // const[userInput, setUserInput]=useState({
  //     enterTitle:'',
  //     enterAmount:'',
  //     enterDate:''
  // })

  const titleChangeHandler = (event) => {
    setEnterTitled(event.target.value);
    //     setUserInput({
    //         ...userInput,
    //         enterTitle:event.target.value
    //     })
    // }
    // const setUserInput((privious) =>{
    //     return{...privState, enterTitle:event.target.value};
  };
  const amountChangeHandler = (event) => {
    setEnterAount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enterAmount:event.target.value
    // })
  };
  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enterDate:event.target.value
    // })
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseDtata = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseDtata);
    setEnterTitled('');
    setEnterAount('');
    setEnterDate('');
  };


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Tile</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="Number"
            min="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="Date"
            min="2022-11-21"
            max="2024-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="button" onClick={props.formCancle}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
