import React from "react";

const ExpenseList = ({ expenses, deleteExpense }) => {
  if (!expenses.length) return <p>No expenses added yet.</p>;
  return (
    <ul className="expense-list">
      {expenses.map((exp) => (
        <li key={exp.id} className="expense-item">
          <span>
            {exp.title}: ${exp.amount.toFixed(2)}
          </span>
          <button onClick={() => deleteExpense(exp.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
