import ExpenseItem from "./Components/ExpenseItem";
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
      <h2>Let's get started!</h2>
      <p> Have we understood this correctly? </p>
      <ExpenseItem
        titleName={expense[0].title}
        amountNumber={expense[0].amount}
        date={expense[0].date}
      />
      <ExpenseItem
        titleName={expense[1].title}
        amountNumber={expense[1].amount}
        date={expense[1].date}
      />
      <ExpenseItem
        titleName={expense[2].title}
        amountNumber={expense[2].amount}
        date={expense[2].date}
      />
      <ExpenseItem
        titleName={expense[3].title}
        amountNumber={expense[3].amount}
        date={expense[3].date}
      />
    </div>
  );
}

export default App;
