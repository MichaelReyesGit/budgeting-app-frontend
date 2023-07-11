import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/NavBar";
import TransactionIndex from "./components/TransactionIndex";
import TransactionShow from "./components/TransactionShow";
import TransactionForm from "./components/TransactionForm";
import TransactionEdit from "./components/TransactionEdit";
import url from "./url";
import "./App.css";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/transactions`)
      .then((response) => {
        setTransactions(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/transactions/new"
          element={<TransactionForm setTransactions={setTransactions} />}
        />
        <Route
          path="/transactions/:id/edit"
          element={<TransactionEdit setTransactions={setTransactions} />}
        />

        <Route
          path="/transactions/:id"
          element={<TransactionShow transactions={transactions} />}
        />

        <Route
          path="/"
          element={<TransactionIndex transactions={transactions} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
