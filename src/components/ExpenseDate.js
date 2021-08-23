import "./ExpenseDate.css";

function ExpenseDate(props){
    const expenseDate = props.date;
    return(
        <div className="expense-date">
                <div className="expense-date__day">{expenseDate.toLocaleString('en-IN', { day: '2-digit' })}</div>
                <div className="expense-date__month">{expenseDate.toLocaleString('en-IN', { month: 'long' })}</div>
                <div className="expense-date__year">{expenseDate.toLocaleString('en-IN', { year: 'numeric' })}</div>
            </div>
    );
}

export default ExpenseDate;