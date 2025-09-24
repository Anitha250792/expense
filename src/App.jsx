import React, { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ErrorBoundary from "./components/ErrorBoundary";
import "./styles.css";

const App = () => {
  const [expenses, setExpenses] = useState(
    JSON.parse(localStorage.getItem("expenses")) || []
  );

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => setExpenses([...expenses, expense]);
  const deleteExpense = (id) =>
    setExpenses(expenses.filter((expense) => expense.id !== id));

  // Calculate total
  const totalAmount = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="app-container">
      <h1>Expense Tracker</h1>
      <ErrorBoundary>
        <ExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
        <h2>Total: ${totalAmount.toFixed(2)}</h2> {/* Display total */}
      </ErrorBoundary>
    </div>
  );
};

export default App;
