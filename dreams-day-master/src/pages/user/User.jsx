import React, { useCallback, useEffect, useState } from "react";
import CircularChart from "../../components/user/circularChart/CircularChart";
import BarChart from "../../components/user/barchart/BarChart";
import ExpenseCard from "../../components/user/expenseCard/ExpenseCard";
import "./user.scss";
import Sidebar from "../../components/user/sidebar/SideBar";
import usePaymentData from "../../hook/usePaymentData";
const User = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWithDraw, setIsWithDraw] = useState(false);
  const [deposit, setDeposit] = useState(0);
  const loggedInUSer = JSON.parse(localStorage.getItem("user"));
  const { payments } = usePaymentData(loggedInUSer?.uid);

  useEffect(() => {
    setDeposit(payments[0]?.amount);
  }, [payments]);

  const handlePressPay = useCallback(() => {
    console.log("pay");
    setIsWithDraw(false);
    setIsOpen(true);
  }, []);
  const handlePressWithDraw = useCallback(() => {
    setIsWithDraw(true);
    setIsOpen(true);
  }, []);

  return (
    <div className="user-dashboard">
      <Sidebar
        name={loggedInUSer?.name}
        phone={loggedInUSer?.mobile}
        email={loggedInUSer?.email}
      />
      <div className="dashboard-content">
        <div className="charts">
          <BarChart
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            isWithDraw={isWithDraw}
          />
        </div>
        <CircularChart totalDeposit={deposit ? deposit : 0} bonusPoints={500} />
        <div className="expenses">
          <ExpenseCard
            title="Pay Now"
            hoverBgColor="#2e6eff "
            onClick={handlePressPay}
          />
          <ExpenseCard
            title="WithDraw"
            hoverBgColor="green"
            onClick={handlePressWithDraw}
          />
        </div>
      </div>
    </div>
  );
};

export default User;
