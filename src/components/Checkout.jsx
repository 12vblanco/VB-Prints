import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import styled from "styled-components";

// Load Stripe with your publishable key

const stripePromise = loadStripe(
  "pk_test_51HqgwdGKpDMhyEuL11A63hDc42CNdjZbMH93xDPIumVyYlgGe5byVF9rXhgW0rs64r0uaDjQUqlwOUDXrbTZy9nx00cyCIwiBm"
);

const Checkout = () => {
  const [clientSecret, setClientSecret] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Fetch the client secret from your server
    fetch("/api/stripe", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((session) => {
        setClientSecret(session.clientSecret);
      })
      .catch((err) => {
        console.error("Error fetching client secret:", err);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Confirm the card payment using client secret
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
      },
    });

    if (result.error) {
      console.error("Payment failed:", result.error);
      alert(result.error.message);
    } else if (result.paymentIntent.status === "succeeded") {
      console.log("Payment succeeded");
      alert("Payment succeeded!");
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <StyledForm onSubmit={handleSubmit}>
        <CardElement />
        <ChkButton type="submit" disabled={!stripe}>
          Checkout
        </ChkButton>
      </StyledForm>
    </Elements>
  );
};

const StyledForm = styled.form`
  width: 100%;
  max-width: 25rem;
  margin: 0 auto;
`;

const ChkButton = styled.button`
  background-color: var(--bright);
  color: var(--dark);
  padding: 0.625rem 1rem;
  border-radius: 1.2rem;
  font-size: 1.125rem;
  font-weight: 700;
  cursor: pointer;
  z-index: 110;
  border: 0.2rem solid var(--dark);
  margin-top: 1rem;
`;

export default Checkout;
