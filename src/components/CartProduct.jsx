/* eslint-disable react/prop-types */
import { useContext } from "react";
import styled from "styled-components";
import { getProductData } from "../screens/home/Prints";
import { CartContext } from "./CartContext";

const CartProduct = (props) => {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <>
      <RowDiv style={{ marginTop: "12px" }}>
        <Img alt="A print of the rings of a tree" src={productData.imgs[0]} />
        <ColumnDiv>
          <Name>{productData.name}</Name>
          <QtyDiv>
            {quantity > 1 ? (
              <Qty>
                {quantity}
                <span> units</span>
              </Qty>
            ) : (
              <Qty>
                {quantity}
                <span> unit</span>
              </Qty>
            )}
          </QtyDiv>
          <Price>Price: £ {(quantity * productData.price).toFixed(2)}</Price>

          <RowDiv>
            <Minus onClick={() => cart.removeOneFromCart(id)}>-</Minus>
            <RemoveButton onClick={() => cart.deleteFromCart(id)}>
              Remove
            </RemoveButton>
            <Plus onClick={() => cart.addOneToCart(id)}>+</Plus>
          </RowDiv>
        </ColumnDiv>
      </RowDiv>
      <hr style={{ marginTop: "1rem" }}></hr>
    </>
  );
};

const RemoveButton = styled.button`
  color: var(--red);
  background: #fff;
  padding: 0.375rem 0.5rem;
  border-radius: 1.2rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  z-index: 110;
  border: 0.16rem solid var(--red);
  margin: 0.4rem 0 -0.4rem 0;
`;

const Name = styled.p`
  letter-spacing: -0.03rem;
  font-size: 0.875rem;
  font-style: italic;
  font-weight: 500;
`;
const Qty = styled.h3`
  color: var(--red);
  font-size: 0.875rem;
  font-weight: 300;

  span {
    color: var(--dark);
    font-size: 14px;
  }
`;
const QtyDiv = styled.div`
  color: var(--red);
`;
const Price = styled.h3`
  color: var(--dark);
  font-size: 0.875rem;
  font-weight: 500;
`;

const Img = styled.img`
  max-width: 5rem;
  border-radius: 1.125rem;
  padding: 0.25rem;
`;

const RowDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 1.4rem;
`;

const Plus = styled.span`
  font-size: 2rem;
  margin: -1rem 1rem -2rem 0.8rem;
`;
const Minus = styled.span`
  font-size: 2rem;
  margin: -1rem 1rem -2rem 0px;
`;

export default CartProduct;
