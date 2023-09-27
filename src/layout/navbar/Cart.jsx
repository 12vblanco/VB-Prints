/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import styled from "styled-components";
import { CartContext } from "../../components/CartContext";

const Cart = ({ handleShow }) => {
  const cart = useContext(CartContext);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  return (
    <>
      <ShoppingDiv onClick={handleShow}>
        <ShoppingCart />
        <Counter>{productsCount}</Counter>
      </ShoppingDiv>
    </>
  );
};

const ShoppingDiv = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 1rem;
`;

const ShoppingCart = styled(MdOutlineShoppingCart)`
  font-size: 2.875rem;
  margin-top: 1rem;
  width: 3.5rem;
  margin-left: 1.6rem;
  position: relative;
  @media (max-width: 646px) {
    font-size: 2.2rem;
    margin-top: 1.125rem;
    margin-right: -0.625rem;
    margin-left: 0px;
  }
`;

const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #fff;
  width: 1.625rem;
  height: 1.75rem;
  font-size: 1.25rem;
  background: var(--red);
  position: relative;
  top: 0.3125rem;
  right: 14px;
  @media (max-width: 646px) {
    width: 1.1875rem;
    height: 1.375rem;
    font-size: 1rem;
  }
`;

export default Cart;
