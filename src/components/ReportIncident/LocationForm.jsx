import React from "react";
import FormButton from "./FormButton.jsx";
import FormButtonContainer from "./FormButtonContainer.jsx";
import PageTitle from "../../styled/PageTitle/PageTitle.js";
import NavigationButtonsContainer from "../../styled/NavigationButtonsContainer/NavigationButtonsContainer.js";
import NavigationButton from "../../styled/NavigationButton/NavigationButton.js";

const LocationForm = ({ prevStep, nextStep, handleChange, values }) => {
  const selectLocationAndContinue = (location) => {
    handleChange("location")(location);
    nextStep();
  };

  const locations = [
    "Edificio",
    "Ascensor",
    "Garaje",
    "Trastero",
    "Áreas comunes",
    "Exteriores",
    "Seguridad",
  ];

  return (
    <div>
      <PageTitle>Ubicación del incidente</PageTitle>
      <FormButtonContainer>
        {locations.map((location) => (
          <FormButton
            key={location}
            onClick={() => selectLocationAndContinue(location)}
          >
            {location}
          </FormButton>
        ))}
      </FormButtonContainer>
      <NavigationButtonsContainer>
        <NavigationButton onClick={prevStep}>Volver</NavigationButton>
      </NavigationButtonsContainer>
    </div>
  );
};

export default LocationForm;
