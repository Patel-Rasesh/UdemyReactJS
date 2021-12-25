import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  
  return (
    <div className="expense-item">
      <ExpenseDate date = {props.date}/>
      <div className="expense_item__description">
        <h2> {props.titleName}</h2>
        <div className="expense_item__price"> ${props.amountNumber}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
