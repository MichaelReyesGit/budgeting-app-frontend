import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import url from "../url";

const TransactionForm = ({ setTransactions }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    item_name: "",
    amount: "",
    date: "",
    from: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (
      !formData.item_name ||
      !formData.amount ||
      !formData.date ||
      !formData.from ||
      !formData.category
    ) {
      alert("Please fill in all fields");
      return;
    }

    axios
      .post(`${url}/transactions`, formData)
      .then((response) => {
        setTransactions((prevTransactions) => [
          ...prevTransactions,
          response.data,
        ]);
        navigate(`/transactions/${response.data.id}`);
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while saving the transaction");
      });
  };

  return (
    <div>
      <h2>Create Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Item Name:
          <input
            type="text"
            name="item_name"
            value={formData.item_name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Amount:
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          From:
          <input
            type="text"
            name="from"
            value={formData.from}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default TransactionForm;
