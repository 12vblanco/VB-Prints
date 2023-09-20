/* eslint-disable react/prop-types */
import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";
import { CartContext } from "./CartContext";
import CartProduct from "./CartProduct";

const Modal = ({ handleClose }) => {
  const cart = useContext(CartContext);

  const openStripeCheckout = async () => {
    try {
      const response = await fetch("/.netlify/functions/stripeCheckout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: cart.getTotalCost(), currency: "usd" }),
      });

      if (!response.ok) {
        // Handle non-200 status codes
        console.error(
          "Failed to fetch clientSecret:",
          response.status,
          response.statusText
        );
        return;
      }

      const { clientSecret } = await response.json();

      if (!clientSecret) {
        console.error("Received null clientSecret from the server.");
        return;
      }

      // Open a new window for the Stripe checkout
      const stripeWindow = window.open("", "_blank");

      // Pass the clientSecret to the new window
      stripeWindow.clientSecret = clientSecret;

      // Load the Stripe checkout page in the new window
      stripeWindow.location.href = "/stripeCheckout.html"; // Replace with the actual URL for your Stripe checkout page
    } catch (error) {
      console.error("Error while opening Stripe checkout:", error);
    }
  };

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  function timer() {
    setTimeout(() => handleClose(), 2900);
  }

  return (
    <ModalWrapper>
      <ModalHeader
        style={
          productsCount > 0
            ? { borderBottom: "1px solid #333" }
            : { borderBottom: "none" }
        }
      >
        {productsCount > 0 ? <p>Your basket:</p> : ""}
        <Close>
          <IoMdClose onClick={handleClose} />
        </Close>
      </ModalHeader>
      <>
        {productsCount > 0 ? (
          <>
            {cart.items.map((currentProduct, i) => (
              <CartProduct
                key={i}
                id={currentProduct.id}
                quantity={currentProduct.quantity}
                name={currentProduct.name}
                img={
                  currentProduct.imgs && currentProduct.imgs.length > 0
                    ? currentProduct.imgs[0]
                    : ""
                }
              />
            ))}
            <RowDiv>
              <p>
                Total:{" "}
                <span style={{ fontWeight: "500" }}>
                  £{cart.getTotalCost().toFixed(2)}
                </span>
              </p>
              <div onClick={openStripeCheckout}>
                <CheckoutButton>Checkout</CheckoutButton>
              </div>
            </RowDiv>
          </>
        ) : (
          <>
            <h5
              style={{
                textTransform: "sentence",
                fontWeight: "300",
                marginTop: "18px",
              }}
            >
              There are no products in your basket.
            </h5>
          </>
        )}
        {productsCount === 0 && timer()}
      </>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
  top: 100px;
  right: 0;
  width: 23.75rem;
  height: auto;
  max-height: 80vh;
  padding: 0.6rem 1.4rem;
  border: solid #333 0.12rem;
  border-right: none;
  background: #f4f7f8;
  z-index: 124;
  border-radius: 0.6rem 0 0 0.6rem;
  @media (max-width: 460px) {
    width: 340px;
    font-size: 20px;
    padding-top: 8px;
    top: 140px;
  }
`;

const ModalHeader = styled.header`
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  padding-bottom: 1rem;
  font-weight: 500;
`;

const Close = styled.div`
  font-size: 2.2rem;
  cursor: pointer;
  position: absolute;
  border-radius: 1.2rem;
  right: 0.4rem;
  top: 6px;
  @media (max-width: 460px) {
    font-size: 40px;
  }
`;

const RowDiv = styled.div`
  margin-top: 28px;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const CheckoutButton = styled.button``;

export default Modal;
