import React, { useState } from "react";

import "./Expense.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../Filter/ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expense(probs) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const changeYear = (year) => {
    //  console.log(year);
    setFilteredYear(year);
  };

  const filteredExpense = probs.expensesItem.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeYear={changeYear} />

        <ExpenseChart expenses={filteredExpense} />
        <ExpenseList items={filteredExpense}></ExpenseList>
      </Card>
    </div>
  );
}

export default Expense;
