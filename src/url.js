let url =
  process.env.NODE_ENV === "production"
    ? "https://budgeting-app-backend-zddz.onrender.com"
    : "http://localhost:3001";

export default url;
