import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import styled from "styled-components";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:4242/home",
      },
    });

    if (error) {
      setErrorMessage(error.message);
    } else {
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <PaymentElement />
      <ChkButton disabled={!stripe}>Submit</ChkButton>
      {errorMessage && <div>{errorMessage}</div>}
    </StyledForm>
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

export default CheckoutForm;
