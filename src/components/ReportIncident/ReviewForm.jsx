import React from "react";
import styled from "styled-components";
import NavigationButtonsContainer from "../../styled/NavigationButtonsContainer/NavigationButtonsContainer";
import NavigationButton from "../../styled/NavigationButton/NavigationButton";
import PageTitle from "../../styled/PageTitle/PageTitle";

const ReviewContainer = styled.div`
display: flex;
flex-direction: column; 
align-items: center; 
`;

const AlignTextLeft = styled.div`
text-align: left;
`;

const ReviewForm = ({ nextStep, prevStep, values }) => {
  const goNext = () => {
    nextStep();
  };

  const goBack = () => {
    prevStep();
  };

  return (
    <div>
      <PageTitle>Revise su informe de incidencia</PageTitle>
      <ReviewContainer>
        <AlignTextLeft>
      <h4>La incidencia: {values.subcategory}</h4>
      <h4>Donde: {values.category}</h4><br/>
      <h4>Descripción:</h4>
      <p>{values.description}</p><br/>
      <h4>Fotos:</h4><br/>
      </AlignTextLeft>
      {values.photos
        .filter((photo) => photo != null)
        .map((photo, i) => (
          <img
            key={i}
            src={URL.createObjectURL(photo)}
            alt={`Preview ${i}`}
            width="300"
            height="300"
            style={{ objectFit: "contain" }}
          />
        ))}
        </ReviewContainer>
      <NavigationButtonsContainer>
        <NavigationButton onClick={goBack}>Volver</NavigationButton>
        <NavigationButton onClick={goNext}>Enviar</NavigationButton>
      </NavigationButtonsContainer>
    </div>
  );
};

export default ReviewForm;