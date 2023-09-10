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
  font-size: 46px;
  margin-top: 16px;
  width: 56px;
  margin-left: 1.6rem;
  position: relative;
  @media (max-width: 646px) {
    font-size: 44px;
    margin-top: 6px;
    margin-right: 12px;
  }
`;

const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: #fff;
  width: 26px;
  height: 28px;
  font-size: 20px;
  background: var(--red);
  position: relative;
  top: 5px;
  right: 14px;
`;

export default Cart;
