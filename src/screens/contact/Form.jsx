import React from "react";
import styled from "styled-components";

const Form = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Div>
      <FromContainer>
        <H1>Contact us!</H1>
        <StyledForm
          name="BasketForm"
          method="POST"
          data-netlify="true"
          onSubmit={onSubmitHandler}
        >
          <input type="hidden" name="BasketForm" value="BasketForm" />

          <Label htmlFor="name">
            Your name
            <Input id="name" type="text" name="name" />
          </Label>

          <Label htmlFor="email">
            Your email
            <span style={{ color: "var(--red)", fontSize: "1.5rem" }}>*</span>
            <Input id="email" type="email" name="email" required="required" />
          </Label>

          <Label htmlFor="textarea">
            Message
            <span style={{ color: "var(--red)", fontSize: "1.5rem" }}>*</span>
            <TextArea
              id="textarea"
              type="textarea"
              name="textarea"
              style={{
                height: "140px",
                fontSize: "1.5rem",
              }}
            />
          </Label>

          <Label htmlFor="checkbox">
            <Checkbox type="checkbox" required="required" />
            <CheckText>
              I am happy to receive emails regarding this message
              <span style={{ color: "#a52a2a", fontSize: "1.5rem" }}>*</span>
              {/* </a> */}
            </CheckText>
          </Label>

          <InputButton type="submit" value="Send" />
        </StyledForm>
      </FromContainer>
    </Div>
  );
};

const Div = styled.div``;

const FromContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem 1rem;
  @media (max-width: 640px) {
    padding: 1rem 2rem;
  }
`;

const H1 = styled.h1`
  font-size: 1.125rem;
  margin-bottom: 1rem;
  font-weight: 700;
  @media (max-width: 640px) {
    margin-top: 1rem;
    margin-bottom: 0.6rem;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 460px;
  min-width: 300px;
  margin: 0 auto;
  @media (max-width: 640px) {
    max-width: 360px;
    min-width: 300px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 7px;
  height: 42px;
  border: 0 solid black;
  border-bottom: 0.2rem solid var(--dark);
  outline: 0;
  font-size: 1.125rem;
  background: transparent;
  @media (max-width: 640px) {
    width: 80%;
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  padding: 0.4375rem;
  height: 2rem;
  border: 0 solid black;
  border-bottom: 0.2rem solid var(--dark);
  outline: 0;
  font-size: 1.125rem;
  background: transparent;
  @media (max-width: 640px) {
    width: 80%;
  }
`;

const Label = styled.label`
  font-size: 1rem;
`;

const Checkbox = styled.input`
  height: 1.125rem;
  width: 1.125rem;
  outline: 0.2rem solid black;
  margin-top: 1.2rem;
  &:checked {
    background-color: transparent;
    color: var(--dark);
  }
`;

const CheckText = styled.p`
  text-align: left;
  font-size: 0.8rem;
  line-height: 1.5;
  padding-left: 2rem;
  margin-top: -36px;
  @media (max-width: 640px) {
    width: 80%;
  }
`;

const InputButton = styled.input`
  background-color: var(--bright);
  color: var(--dark);
  padding: 0.6rem 0.8rem;
  border-radius: 1.2rem;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  border: 0.2rem solid var(--dark);
  display: block;
  margin: 0.6rem auto 0.2rem auto;
`;

export default Form;
