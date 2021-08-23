import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
    const expenseAmount = props.amount;
    const expenseTitle = props.title;
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <h2 className="expense-item__description">{expenseTitle}</h2>
            <div className="expense-item__price">₹ {expenseAmount}</div>
        </div>
    );
}

export default ExpenseItem;