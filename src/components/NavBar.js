import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import url from "../url";

const NavBar = () => {
  const [bankAccountTotal, setBankAccountTotal] = useState(0);

  useEffect(() => {
    axios
      .get(`${url}/transactions`)
      .then((response) => {
        const total = response.data.reduce((acc, transaction) => {
          return acc + transaction.amount;
        }, 0);
        setBankAccountTotal(total);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <nav>
      <h1>Budgeting App</h1>
      <div className="bank-account-total">
        Bank Account Total: ${bankAccountTotal}
      </div>
      <div>
        <Link to="/transactions/new">Create New</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default NavBar;
