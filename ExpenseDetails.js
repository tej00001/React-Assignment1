function ExpenseDetails(props) {
  return (
    <div className="expense-item__Location">
      at {props.LocationOfExpenditure}
      <div className="expense-item__price">Rs {props.amount}</div>
    </div>
  );
}
export default ExpenseDetails;
