import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm"

const NewExpense=(props)=>{
const[isEditing, setIsEditing]= useState('')      
const saveExpenseData=(enteredExpenseData)=>{
   const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toString()
};
props.onAddExpense(expenseData);
}


const formCloser=()=>{
      setIsEditing(true)
}
const stopEditing=()=>{
      setIsEditing(false)
}

return(

<div className="new-expense">

  
  {!isEditing && (
  <button onClick={formCloser}>Add New Expenses</button>
  )}

      {isEditing && (
      <ExpenseForm 
      onSaveExpenseData={saveExpenseData}
      formCancle={stopEditing}/>
    )}
    
</div>
);   
};




export default NewExpense;