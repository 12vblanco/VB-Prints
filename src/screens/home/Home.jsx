import styled from "styled-components";
import MainContainer from "../../components/MainContainer";
import StyledContainer from "../../components/StyledContainer";
import Print from "./Print";
import { products } from "./Prints";

const Home = (handleShow) => {
  return (
    <MainContainer>
      <StyledContainer>
        {products.map((product, i) => {
          return (
            <ProductCard key={i}>
              <Print product={product} handleShow={handleShow} />
            </ProductCard>
          );
        })}
      </StyledContainer>
    </MainContainer>
  );
};

const ProductCard = styled.div`
  margin: 0.275rem 0.625rem;
`;

export default Home;
