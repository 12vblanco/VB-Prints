import styled from "styled-components";

const StyledContainer = (props) => {
  // eslint-disable-next-line react/prop-types
  return <Div>{props.children}</Div>;
};

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1920px;
  padding-top: 4rem;
  margin-bottom: 2rem;

  @media (max-width: 1824px) {
    padding-top: 1rem;
  }
  @media (max-width: 1040px) {
    margin-top: 5rem;
  }
  @media (max-width: 540px) {
    margin-top: 3rem;
    margin-bottom: 1rem;
    padding-bottom: 0rem;
  }
`;

export default StyledContainer;
