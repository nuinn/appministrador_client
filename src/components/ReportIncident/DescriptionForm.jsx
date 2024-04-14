import React from "react";
import styled from "styled-components";
import PageTitle from "../../styled/PageTitle/PageTitle.js";
import NavigationButtonsContainer from "../../styled/NavigationButtonsContainer/NavigationButtonsContainer.js";
import NavigationButton from "../../styled/NavigationButton/NavigationButton.js";
import StyledButtonContainer from "../Detail/styled/ButtonContainer.js"
import StyledButton from "../styled/Button/Button.js"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 24px;
`

const StyledTextarea = styled.textarea`
  width: 90%;
  min-height: 200px;
  padding: 10px;
  margin: 15px;
  font-size: 16px;
  border-radius: 8px;
  box-sizing: border-box;
  padding: 10px;
  border: none;
  background-color: var(--light-grey-color);
  resize: none;

  &:focus {
    outline: 0;
    border: none;
  }
`;

const DescriptionForm = ({ nextStep, prevStep, handleChange, values }) => {
  const handleDescriptionChange = (e) => {
    handleChange("description")(e.target.value);
  };

  return (
    <StyledContainer>
      <PageTitle>Describa el problema</PageTitle>
      <StyledTextarea
        value={values.description}
        onChange={handleDescriptionChange}
        placeholder="Describa el problema"
        autoFocus
      />
      {/* <NavigationButtonsContainer>
        <NavigationButton onClick={prevStep}>Volver</NavigationButton>
        <NavigationButton onClick={nextStep}>Siguiente</NavigationButton>
      </NavigationButtonsContainer> */}
      <StyledButtonContainer>
        <StyledButton $bgcolor='var(--main-color)' onClick={prevStep}>Volver</StyledButton>
        <StyledButton onClick={nextStep}>Siguiente</StyledButton>
      </StyledButtonContainer>
    </StyledContainer>
  );
};

export default DescriptionForm;
