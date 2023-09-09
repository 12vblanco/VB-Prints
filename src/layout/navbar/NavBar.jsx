import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo.jpg";
import logoX2 from "../../assets/images/logoX2.jpg";
import logoX3 from "../../assets/images/logoX3.jpg";
// import Modal from "../Modal";
import BurgerMenu from "./BurgerMenu";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1140);
  const updateNavMenu = () => {
    setDesktop(window.innerWidth > 1140);
  };

  useEffect(() => {
    window.addEventListener("resize", updateNavMenu);
    return () => window.removeEventListener("resize", updateNavMenu);
  });

  return (
    <>
      <StyledDiv>
        <Link to="/">
          <LogoDiv>
            <Img
              src={logo}
              alt="victor blanco's logo"
              srcSet={`
    ${logo} 1x,
    ${logoX2} 2x,
    ${logoX3} 3x
  `}
            />

            <Name>Victor Blanco</Name>
          </LogoDiv>
        </Link>
        {isDesktop ? (
          <NavDiv>
            <NavUl>
              <NavMenu
                isDesktop={isDesktop}
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
              />
            </NavUl>
          </NavDiv>
        ) : (
          <BurgerMenu handleShow={handleShow} handleClose={handleClose} />
        )}
      </StyledDiv>

      {/* {show && <Modal handleClose={handleClose} />} */}
    </>
  );
};

const StyledDiv = styled.nav`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  background: #f4f7f8;
  display: flex;
  width: 100vw;
  height: 110px;
  max-width: 140rem;
  align-items: center;
  justify-content: space-evenly;
  z-index: 123;
  /* box-shadow: 4px 0px 18px rgba(3, 3, 3, 0.06); */

  @media (max-width: 400px) {
    margin-left: 0;
    padding-top: 1%.4;
    height: 5rem;
  }
`;

const LogoDiv = styled.div`
  display: flex;
  margin-left: 4.4rem;
  height: 9.2rem;
  width: auto;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 480px) {
    height: 2.2rem;
    margin: 0;
  }
`;

const NavDiv = styled.div`
  display: flex;
  height: 9.2rem;
  width: auto;
  align-items: center;
  justify-content: space-around;
`;

const NavUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
`;

const Img = styled.img`
  width: 70px;
  @media (max-width: 685px) {
    width: 50px;
  }
  @media (max-width: 610px) {
    width: 40px;
  }
`;

const Name = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 900;
  font-size: 3.5rem;
  margin-left: 2.5rem;
  letter-spacing: -0.16rem;
  @media (max-width: 1800px) {
    font-size: 3.25rem;
    margin-left: 30px;
  }
  @media (max-width: 685px) {
    font-size: 2.5rem;
    margin-left: 1rem;
  }
  @media (max-width: 610px) {
    font-size: 2.125rem;
    margin-left: 0.4rem;
  }
  @media (max-width: 360px) {
    font-size: 1.8rem;
  }
`;

export default Navbar;
