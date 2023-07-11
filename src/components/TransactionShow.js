import axios from "axios";
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import url from "../url";

const TransactionShow = ({ transactions }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const transaction = transactions.find((t) => t.id === id);

  const handleDelete = (id) => {
    axios
      .delete(`${url}/transactions/${id}`)
      .then((response) => {
        alert("item deleted");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Transaction Details</h2>
      {transaction ? (
        <div>
          <p>Item Name: {transaction.item_name}</p>
          <p>Amount: {transaction.amount}</p>
          <p>Date: {transaction.date}</p>
          <p>From: {transaction.from}</p>
          <p>Category: {transaction.category}</p>
          <Link to={`/transactions/${transaction.id}/edit`}>Edit</Link>
          <button
            className="btn btn-block btn-primary rounded-0 mr-auto ml-auto"
            onClick={() => handleDelete(transaction.id)}
          >
            Delete
          </button>
        </div>
      ) : (
        <p>Transaction not found.</p>
      )}
    </div>
  );
};

export default TransactionShow;
