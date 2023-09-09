import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterDiv>
        <Div>
          <NavLink to="/contact" className={"copy"}>
            Victor Blanco 2019 -{new Date().getFullYear()} &copy;
            <span>&nbsp;&nbsp;</span>
          </NavLink>
          <NavLink to="/terms" className={"terms"}>
            {" "}
            Terms & conditions
          </NavLink>{" "}
          <span>&nbsp;</span>
        </Div>
      </FooterDiv>
    </>
  );
};

const FooterDiv = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #f4f7f8;
  color: white;
  text-align: center;
  z-index: 24;
`;
const Div = styled.div`
  padding: 0.4rem;
  background: #f4f7f8;
  font-size: 0.8125rem;
  color: black;
  font-weight: 500;
`;

export default Footer;
