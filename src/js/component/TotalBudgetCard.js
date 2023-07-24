import React from "react";
import BudgetCard from "./BudgetCard";
import { useBudgets } from "../contexts/BudgetsContext";
import "/workspace/Xpent-/src/styles/totalBudgetCard.css";


export default function TotalBudgetCard(props) {
  const { expenses, budgets } = useBudgets();
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0);
  const max = budgets.reduce((total, budgets) => total + budgets.max, 0);
  if (max === 0) return null;

  return <> <BudgetCard id="TotalCard" amount={amount} name="Total" gray max={max} hideButtons /> </>;
}
