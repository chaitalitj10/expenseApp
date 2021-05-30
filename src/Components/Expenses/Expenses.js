import "./Expenses.css";
import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filterYear, setFilteredYear] = useState("2020");

  const yearFilterHandler = (expensefilter) => {
    setFilteredYear(expensefilter);
  };
  const filteredExpenses = props.expense.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });


 

  return (
    <div>
      <div className="expenses">
        <ExpenseFilter selected={filterYear} onFilter={yearFilterHandler} />
        <ExpensesChart  expenses = {filteredExpenses}/>
        <ExpensesList item={filteredExpenses}/>
      </div>
    </div>
  );
}

export default Expenses;
