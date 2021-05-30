import React,{useState} from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

function NewExpense(props){
    const [isEditing , setEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const SetEditingHandler = () =>{
        setEditing(true);
    }

    const StopEditingHandler = () =>{
        setEditing(false);
    }
    return(
        <div className="new-expense">
            {!isEditing && <button onClick={SetEditingHandler}>Add New Expenses</button>}
            {isEditing && <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancle={StopEditingHandler}/>}
        </div>

    );
}


export default NewExpense;