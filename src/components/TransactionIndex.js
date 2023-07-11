import React from "react";
import { Link } from "react-router-dom";

const TransactionIndex = ({ transactions }) => {
  return (
    <div>
      <h2>Transactions</h2>
      {transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              <Link to={`/transactions/${transaction.id}`}>
                {transaction.item_name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TransactionIndex;
