//import ExpenseItem from "./Components/ExpenseItem";
import Expenses from "./Components/Expense/Expenses"
import AddExpense from "./Components/NewExpense/AddExpense";

const App = () => {
  const expense = [
    {
      title: "Honda",
      amount: 30.0,
      date: new Date(2022, 3, 19),
    },
    {
      title: "Mazda",
      amount: 40.0,
      date: new Date(2022, 4, 21),
    },
    {
      title: "Toyota",
      amount: 50.0,
      date: new Date(2022, 5, 23),
    },
    {
      title: "Kia",
      amount: 60.0,
      date: new Date(2022, 6, 25),
    },
  ];
  const addExpenseHandler = (expense) => {
    const expenses = {
      ...expense
    };
    console.log(expense);
    console.log("This is App.js");
  };
  return (
    <div>
      <AddExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items = {expense}/>    
    </div>
  );
}

export default App;
