import "./ExpensesItem.css";
import ExpenseDate from "./ExpenseDate";
import React,{useState} from "react";


function ExpenseItem(props) {
  const [currentTitle,updateTitle] = useState(props.title);

  const clickHandler = () =>{
    updateTitle('Updated!');
  }
  return (
    <div className="expense-item">
      <ExpenseDate dateHolder={props.date} />
      <div className="expense-item__description">
        <h2>{currentTitle}</h2>
        <div className="expense-item__price ">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
    
  );
}

export default ExpenseItem;
