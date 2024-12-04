import React from "react";
import "./expenseCard.scss";

const ExpenseCard = ({ title, amount, hoverBgColor = "#f0f0f0", onClick }) => {
  return (
    <div
      className="expense-card"
      onClick={onClick}
      style={{ "--hover-bg-color": hoverBgColor }}
    >
      <h4>{title}</h4>
      <p>{amount}</p>
    </div>
  );
};

export default ExpenseCard;
