/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ImInfo } from "react-icons/im";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AddToButton from "../../components/AddToButton";

const Print = ({ handleShow, print }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };
  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsMouseOver(false);
      setShowInfo(false);
    }, 2000);
  };

  const clickHandler = () => {
    setTimeout(() => {
      setShowInfo(!showInfo);
    }, 1000);
  };

  return (
    <>
      <CardDiv onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ImgDiv>
          <Arrows>
            {print.id === "3" ? (
              <>
                <FaChevronLeft
                  style={{
                    color: isMouseOver ? "var(--bright)" : "transparent",
                    transition: "all .3s linear",
                  }}
                />
                <FaChevronRight
                  style={{
                    color: isMouseOver ? "var(--bright)" : "transparent",
                    transition: "all .3s linear",
                  }}
                />
              </>
            ) : (
              <>
                <FaChevronLeft
                  style={{
                    color: isMouseOver ? "var(--dark)" : "transparent",
                    transition: "all .3s linear",
                  }}
                />
                <FaChevronRight
                  style={{
                    color: isMouseOver ? "var(--dark)" : "transparent",
                    transition: "all .3s linear",
                  }}
                />{" "}
              </>
            )}
          </Arrows>
          <Info
            className="hover"
            onClick={clickHandler}
            style={{
              color: isMouseOver ? "var(--dark)" : "var(--bright)",
              transition: "all .5s linear",
            }}
          >
            {print.id === "3" ? (
              <ImInfo
                onClick={clickHandler}
                style={{
                  color: isMouseOver ? "var(--bright)" : "transparent",
                  transition: "all .5s linear",
                }}
              />
            ) : (
              <ImInfo
                onClick={clickHandler}
                style={{
                  color: isMouseOver ? "var(--dark)" : "transparent",
                  transition: "all .5s linear",
                }}
              />
            )}
          </Info>
          <Link to={print.link}>
            {showInfo && (
              <Description
                visible={showInfo}
                style={{ whiteSpace: "pre-line" }}
              >
                {print.description}
              </Description>
            )}

            <Img src={print.img} alt="A print of tree rings" />
          </Link>
        </ImgDiv>
        <RowDiv>
          <ColumnDiv>
            <Name>{print.name}</Name>
            <RowDiv style={{ width: "254px" }}>
              <Format>{print.format}</Format>
              <Price>£{print.price}</Price>
            </RowDiv>
          </ColumnDiv>

          <AddToButton print={print} handleShow={handleShow}></AddToButton>
        </RowDiv>
      </CardDiv>
    </>
  );
};

const CardDiv = styled.div`
  position: relative;
  width: 340px;
  height: 530px;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0.1875rem 0.3125rem 1.125rem rgba(3, 3, 3, 0.5);
  transform: scale(0.95);
  transition: box-shadow 0.7s, transform 0.5s;
  &:hover {
    transform: scale(1);
    box-shadow: 0 3.75em 5em -1.875em rgba(0, 0, 0, 0.4);
  }
  @media (max-width: 360px) {
    width: 300px;
    height: 467px;
  }
`;

const ImgDiv = styled.div`
  width: 100%;
  height: 444.5px;
  @media (max-width: 360px) {
    height: 380px;
  }
`;

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0.5rem;
  width: 100%;
`;
const RowDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled.img`
  border-radius: 4px 4px 0 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const Name = styled.h2`
  letter-spacing: -0.03rem;
  font-size: 1.3rem;
  font-style: italic;
  font-weight: 500;
  z-index: 123;
  @media (max-width: 360px) {
    font-size: 1.2rem;
  }
`;
const Format = styled.h4`
  font-size: 1rem;
  font-weight: 300;
  z-index: 123;
  @media (max-width: 360px) {
    font-size: 0.9rem;
  }
`;

const Price = styled.span`
  font-size: 1.125rem;
  position: relative;
  font-weight: 500;
  @media (max-width: 360px) {
    font-size: 1rem;
  }
`;

const Info = styled.div`
  position: absolute;
  font-size: 2.6rem;
  margin: 0.6rem;
  z-index: 234;
  cursor: pointer;
  @media (max-width: 360px) {
    font-size: 2;
  }
`;

const Description = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(238, 238, 237, 0.9);
  position: absolute;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  left: 50%;
  transform: translate(-50%);
  font-size: 1.1rem;
  font-weight: 500;
  padding: 4.2rem 1.25rem 3.9rem 1.25rem;
  border-radius: 4px 4px 0px 0px;
  transition: opacity 2s ease;
  @media (max-width: 360px) {
    font-size: 0.7;
  }
`;

const Arrows = styled.div`
  position: absolute;
  width: 100%;
  height: fit-content;
  top: 76%;
  left: 0%;
  transform: translate(-50% -50%);
  display: flex;
  justify-content: space-between;
  padding: 0 0.25rem;
  cursor: pointer;
  font-size: 1.8rem;
`;

export default Print;
