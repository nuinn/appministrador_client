import React from "react";
import styled from "styled-components";
import SinglePhoto from "./SinglePhoto";
import PageTitle from "../../styled/PageTitle/PageTitle.js";
import NavigationButtonsContainer from "../../styled/NavigationButtonsContainer/NavigationButtonsContainer";
import NavigationButton from "../../styled/NavigationButton/NavigationButton";

const PhotoContainer = styled.div`
  display: flex; // This will make the container a flex container
  flex-direction: column; // This will stack the photos and buttons vertically
  align-items: center; // This will center the items horizontally
  justify-content: center; // This will center the items vertically
`;

const PhotoForm = ({
  nextStep,
  prevStep,
  handleFileChange,
  values,
  setValues,
}) => {
  const goNext = () => {
    nextStep();
  };

  const goBack = () => {
    prevStep();
  };

  const handleDelete = (index) => {
    const newPhotos = [...values.image];
    newPhotos.splice(index, 1);
    setValues({ ...values, image: newPhotos });
  };

  // Calculate the number of photo options to show
  const numPhotos = values.image.filter((photo) => photo != null).length;
  const numPhotoOptions = Math.min(numPhotos + 1, 3);

  return (
    <div>
      <PageTitle>Puede adjuntar las fotos</PageTitle>
      <PhotoContainer>
      {Array(numPhotoOptions)
        .fill()
        .map((_, i) => (
          <SinglePhoto
            key={i}
            photo={values.image[i]}
            handleFileChange={(e) => handleFileChange(i, e)}
            handleDelete={() => handleDelete(i)}
          />
        ))}
        </PhotoContainer>
      <NavigationButtonsContainer>
        <NavigationButton onClick={goBack}>Volver</NavigationButton>
        <NavigationButton onClick={goNext}>Siguiente</NavigationButton>
      </NavigationButtonsContainer>
    </div>
  );
};

export default PhotoForm;
