import styled from "styled-components";

const MainContainer = (props) => {
  // eslint-disable-next-line react/prop-types
  return <Div>{props.children}</Div>;
};

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  height: auto;
  padding-top: 4%;
  font-size: 22px;
  margin-top: 110px;
  margin-bottom: 2rem;
  @media (max-width: 1440px) {
    padding-top: 0%;
    justify-content: flex-start;
  }
  @media (max-width: 1040px) {
    margin-top: 0rem;
    margin-bottom: 1rem;
  }
`;

export default MainContainer;
