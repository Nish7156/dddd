import React from "react";
import "./circularChart.scss";

const CircularChart = ({ totalDeposit, bonusPoints }) => {
  return (
    <div className="card-container">
      <div className="card income-card">
        <h4>Total Income</h4>
        <p style={{fontWeight: 'semibold'}}>{`$ ${totalDeposit}`}</p>
      </div>
      <div className="card expenses-card">
        <h4>Total Expenses</h4>
        <p style={{fontWeight: 'semibold'}}>{`$ ${bonusPoints}`}</p>
      </div>
    </div>
  );
};

export default CircularChart;
