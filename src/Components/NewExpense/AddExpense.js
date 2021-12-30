import "./AddExpense.css";
import ExpenseForm from './ExpenseForm'
const AddExpense = (props) => {
  const onSaveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
    ...enteredExpenseData
    }
    console.log(expenseData);
    console.log("We have entered here!");
    props.onAddExpense(expenseData);
  };
  return <div className="add-expense">
    <ExpenseForm onSaveExpenseData = {onSaveExpenseHandler}/>
  </div>;
};

export default AddExpense;
