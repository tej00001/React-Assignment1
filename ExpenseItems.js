import "./ExpenseItems.css";


function ExpenseItems(props) {
  return (
    <div className="expense-item">
      <div>{props.data.date.toLocaleDateString()}</div>
      <div className="expense-item__description">
        <h2>{props.data.name}</h2>
        <div className="expense-item__price">Rs {props.data.amount}</div>
        <div className="expense-item__Location">
          at {props.data.LocationOfExpenditure}
        </div>
      </div>
    </div>
  );
}

export default ExpenseItems;
