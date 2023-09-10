/* eslint-disable react/prop-types */
import { useState } from "react";

import styled from "styled-components";
import Cart from "./Cart";
import NavMenu from "./NavMenu";

const BurgerMenu = ({ handleShow, handleClose }) => {
  const [$isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!$isOpen);
    handleClose();
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <BurgerDiv>
        <Cart handleShow={handleShow} />

        <BurgerIcon
          className={$isOpen ? "open" : "closed"}
          onClick={handleToggle}
        >
          <BurgerIconLines
            className={$isOpen ? "open line-1" : "closed line1"}
          />
          <BurgerIconLines
            className={$isOpen ? "open line-2" : "closed line2"}
          />
          <BurgerIconLines
            className={$isOpen ? "open line-3" : "closed line3"}
          />
        </BurgerIcon>
      </BurgerDiv>
      <BurgerToggled $isOpen={$isOpen}>
        <NavMenu closeMenu={closeMenu} handleShow={handleShow} />
      </BurgerToggled>
    </>
  );
};

const BurgerDiv = styled.div`
  display: flex;
  margin-right: 4%;

  @media (max-width: 640px) {
    flex: initial;
    margin: 0;
  }
`;

const BurgerToggled = styled.div`
  position: fixed;
  top: 6.875rem;
  right: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
  width: 100%;
  height: calc(100vh - 6.875rem);
  background: var(--bright);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: right 0.4s ease-in-out;
  @media (max-width: 400px) {
    top: 6rem;
  }
`;

const BurgerIcon = styled.div`
  position: relative;
  height: 3.125rem;
  width: 3.125rem;
  cursor: pointer;
  margin-top: 1rem;
  margin-left: 1.375rem;

  @media (max-width: 410px) {
    margin-left: 0;
    margin-top: 0.8rem;
  }

  &.open .line-1 {
    position: absolute;
    top: 1rem;
    left: 0.625rem;
    transform: rotate(-45deg) translate(1px, 8px);
  }

  &.open .line-2 {
    position: absolute;
    left: 0.6rem;
    top: 1.6875rem;
    transform: rotate(45deg) translate(1px, -8px);
  }

  &.open .line-3 {
    background: transparent;
    transform: translateX(70px);
  }

  &.closed .line1 {
    position: absolute;
    top: 0.75rem;
    left: 1.5625rem;
    border-radius: 30% 30% 0 0;
    height: 0.375rem;
  }
  &.closed .line2 {
    position: absolute;
    top: 1.875rem;
    left: 1.5625rem;
    border-radius: 0 0 22% 22%;
    height: 0.375rem;
  }
  &.closed .line3 {
    background: var(--dark);
    height: 0.3125rem;
  }
`;

const BurgerIconLines = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 0.375rem;
  width: 2.5rem;
  background-color: #333;
  transition: all 0.3s ease-in-out;
  transform: rotate(180deg);
  @media (max-width: 350px) {
    width: 2rem;
  }

  &::before,
  &::after,
  &::nth-child(3) {
    content: "";
    position: absolute;
    height: 0.25rem;
    width: 1.875rem;
    background-color: #333;
    transition: all 0.3s ease-in-out;
  }

  &::before {
    top: -0.5625rem;
    left: 0;
    border-radius: 50% 50% 0 0;
    transform: ${(props) =>
      props.$$isOpen
        ? "rotate(-45deg) translate(4px, -4px)"
        : "rotate(45deg) translate(-4px, 4px)"};
  }

  &::after {
    top: 0.475rem;
    left: 0;
    border-radius: 0 0 50% 50%;
    transform: rotate(45deg) translate(4px, 4px);
  }

  &:nth-child(3) {
    top: 1.325rem;
    left: 9;
    height: 0.225rem;
    transform-origin: center;
  }
`;

export default BurgerMenu;
