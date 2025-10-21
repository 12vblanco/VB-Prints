import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext.jsx";

const initStripe = async () => {
  const res = await axios.get("src/functions/publishable-key.jsx");
  console.log("Publishable Key:", res.data.publishable_key);
  const publishableKey = await res.data.publishable_key;
  return loadStripe(publishableKey);
};

const Checkout = ({ cartItems }) => {
  const cart = useContext(CartContext);
  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    initStripe().then((s) => setStripe(s));
  }, []);

  const [clientSecretSettings, setClientSecretSettings] = useState({
    clientSecret: "",
    loading: true,
  });

  useEffect(() => {
    async function createPaymentIntent() {
      const amount = cart.getTotalCost() * 100;
      const response = await axios.post("src/functions/create-payment-intent", {
        amount: amount,
      });
      setClientSecretSettings({
        clientSecret: response.data.client_secret,
        loading: false,
      });
    }
    createPaymentIntent();
  }, []);

  return (
    <div>
      {clientSecretSettings.loading ? (
        <p style={{ textAlign: "center", padding: "20px" }}>
          The online shop is closed, please{" "}
          <a
            href="https://www.instagram.com/rigodoner/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#007bff", textDecoration: "underline" }}
          >
            send me a message
          </a>{" "}
          to place an order. Thanks, sorry for the inconvenience.
        </p>
      ) : (
        ""
        // <Elements
        //   stripe={stripe}
        //   options={{
        //     clientSecret: clientSecretSettings.clientSecret,
        //     appearance: { theme: "stripe" },
        //   }}
        // >
        //   <CheckoutForm cartItems={cartItems} />
        // </Elements>
      )}
    </div>
  );
};

export default Checkout;
