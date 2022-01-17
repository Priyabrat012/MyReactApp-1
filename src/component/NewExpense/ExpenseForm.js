import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [entitle, setTitle] = useState("");
  const [endate, setDate] = useState("");
  const [enamount, setAmount] = useState("");
  const [toggle, setToggle] = useState(true);

  // const [userInput, setInput] = useState({
  //   title: "",
  //   date: "",
  //   amount: "",
  // });

  const titleChangeHandler = (event) => {
    //console.log(event.target.value);
    // setInput((preState) => {
    //   return {
    //     ...preState,
    //     title: event.target.value,
    //   };
    // });
    setTitle(event.target.value);

    // console.log(event.target.value);
  };

  const dateChangeHandler = (e) => {
    // setInput({
    //   ...userInput,
    //   date: e.target.value,
    // });
    setDate(e.target.value);
    //console.log(e.target.value);
  };

  const amountChangeHandler = (e) => {
    // setInput({
    //   ...userInput,
    //   amount: e.target.value,
    // });
    setAmount(e.target.value);
    //console.log(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: entitle,
      amount: +enamount,
      date: new Date(endate),
    };

    // props.saveExpenseData(expenseData);

    props.onSaveExpenseData(expenseData);

    setDate("");
    setTitle("");
    setAmount("");

    setToggle((toggle) => {
      return !toggle;
    });
  };

  const hideHandler = () => {
    setToggle((toggle) => {
      return false;
    });
  };

  return (
    <form onSubmit={submitHandler}>
      {
        //   true && <componentjs/> can be used in this way fo rbetter usage
      }
      {toggle && true ? (
        <div>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                value={entitle}
                onChange={titleChangeHandler}
              />
            </div>

            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2021-01-01"
                max="2021-11-21"
                value={endate}
                onChange={dateChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={enamount}
                onChange={amountChangeHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={hideHandler}>Cancel</button>
            <button type="submit">Add Expense</button>
          </div>
        </div>
      ) : (
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      )}
    </form>
  );
};

export default ExpenseForm;
