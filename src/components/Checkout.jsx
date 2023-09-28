import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext.jsx";
import CheckoutForm from "./CheckoutForm.jsx";

const initStripe = async () => {
  const res = await axios.get("/.netlify/functions/publishable-key");
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

      const response = await axios.post(
        "/.netlify/functions/create-payment-intent",
        {
          amount: amount,
        }
      );
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
        <h1>Loading ...</h1>
      ) : (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret: clientSecretSettings.clientSecret,
            appearance: { theme: "stripe" },
          }}
        >
          {" "}
          <CheckoutForm cartItems={cartItems} />{" "}
        </Elements>
      )}
    </div>
  );
};

export default Checkout;
