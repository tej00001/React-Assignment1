import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

function ExpenseItems(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.data.date}></ExpenseDate>
      <ExpenseDetails
        amount={props.data.amount}
        LocationOfExpenditure={props.data.LocationOfExpenditure}
      ></ExpenseDetails>
      <div className="expense-item__description">
        <h2>{props.data.name}</h2>
      </div>
    </div>
  );
}

export default ExpenseItems;
