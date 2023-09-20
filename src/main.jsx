import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const stripePromise = loadStripe(
  "pk_test_51HqgwdGKpDMhyEuL11A63hDc42CNdjZbMH93xDPIumVyYlgGe5byVF9rXhgW0rs64r0uaDjQUqlwOUDXrbTZy9nx00cyCIwiBm"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </React.StrictMode>
);
