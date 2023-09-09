import styled from "styled-components";
import MainContainer from "../../components/MainContainer";
import StyledContainer from "../../components/StyledContainer";
import Print from "./Print";
import { prints } from "./Prints";

const Home = (handleShow) => {
  return (
    <MainContainer>
      <StyledContainer>
        {prints.map((print, i) => {
          return (
            <ProductCard key={i}>
              <Print print={print} handleShow={handleShow} />
            </ProductCard>
          );
        })}
      </StyledContainer>
      {/* <Footer /> */}
    </MainContainer>
  );
};

const ProductCard = styled.div`
  margin: 6px 10px;
`;

export default Home;
