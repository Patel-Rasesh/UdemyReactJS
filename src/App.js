//import ExpenseItem from "./Components/ExpenseItem";
import Expenses from "./Components/Expense/Expenses"
import AddExpense from "./Components/NewExpense/AddExpense";

function App() {
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
  return (
    <div>
      <AddExpense />
      <Expenses items = {expense}/>    
    </div>
  );
}

export default App;
