import React from "react";
import styled from "styled-components";

const Form = () => {
  return (
    <Div>
      <FromContainer>
        <H1>Contact us!</H1>
        <StyledForm name="BasketForm" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="BasketForm" />

          <Label htmlFor="name">
            Your name
            <Input id="name" type="text" name="name" />
          </Label>

          <Label htmlFor="email">
            Your email
            <span style={{ color: "var(--red)", fontSize: "1.5rem" }}>*</span>
            <Input id="email" type="email" name="email" required />
          </Label>

          <Label htmlFor="message">
            Message
            <span style={{ color: "var(--red)", fontSize: "1.5rem" }}>*</span>
            <StyledTextArea id="message" name="message" required rows={6} />
          </Label>

          <CheckboxLabel htmlFor="consent">
            <Checkbox id="consent" type="checkbox" name="consent" required />
            <CheckText>
              I am happy to receive emails regarding this message
              <span style={{ color: "#a52a2a", fontSize: "1.5rem" }}>*</span>
            </CheckText>
          </CheckboxLabel>

          <InputButton type="submit" value="Send" />
        </StyledForm>
      </FromContainer>
    </Div>
  );
};

const Div = styled.div`
  width: 100vw;
  position: relative;
`;

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
  padding: 0.4375rem;
  height: 2.625rem;
  border: 0 solid black;
  border-bottom: 0.2rem solid var(--dark);
  outline: 0;
  font-size: 1.125rem;
  background: transparent;
  @media (max-width: 640px) {
    width: 94%;
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 0.4375rem;
  min-height: 140px;
  border: 0 solid black;
  border-bottom: 0.2rem solid var(--dark);
  outline: 0;
  font-size: 1.125rem;
  background: transparent;
  resize: vertical;
  font-family: inherit;
  @media (max-width: 640px) {
    width: 94%;
  }
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

const CheckboxLabel = styled.label`
  font-size: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: flex-start;
`;

const Checkbox = styled.input`
  height: 1.125rem;
  width: 1.125rem;
  border: 0.2rem solid black;
  margin-top: 0.2rem;
  margin-right: 0.5rem;
  flex-shrink: 0;
  &:checked {
    background-color: transparent;
    color: var(--dark);
  }
`;

const CheckText = styled.span`
  text-align: left;
  font-size: 0.7rem;
  line-height: 1.5;
  @media (max-width: 640px) {
    width: 94%;
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

  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s;
  }
`;

export default Form;
