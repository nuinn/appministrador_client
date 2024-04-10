import React from "react";
import styled from "styled-components";
import PageTitle from "../../styled/PageTitle/PageTitle.js";
import NavigationButtonsContainer from "../../styled/NavigationButtonsContainer/NavigationButtonsContainer.js";
import NavigationButton from "../../styled/NavigationButton/NavigationButton.js";

const StyledTextarea = styled.textarea`
width: 90%;
min-height: 200px;
padding: 10px;
margin:15px;
font-size: 16px;
border-radius: 5px;
box-sizing: border-box;
`;

const DescriptionForm = ({ nextStep, prevStep, handleChange, values }) => {
  const handleDescriptionChange = (e) => {
    handleChange("description")(e.target.value);
  };

  return (
    <div>
      <PageTitle>Describa el problema</PageTitle>
      <StyledTextarea
        value={values.description}
        onChange={handleDescriptionChange}
        placeholder="Describa el problema"
      />
      <NavigationButtonsContainer>
        <NavigationButton onClick={prevStep}>Volver</NavigationButton>
        <NavigationButton onClick={nextStep}>Siguiente</NavigationButton>
      </NavigationButtonsContainer>
    </div>
  );
};

export default DescriptionForm;
