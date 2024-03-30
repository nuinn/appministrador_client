import React from "react";
import FormButton from "../../components/ReportIncident/FormButton.jsx";
import FormButtonContainer from "../../components/ReportIncident/FormButtonContainer.jsx";
import PageTitle from "../../styled/PageTitle/PageTitle.js";
import NavigationButtonsContainer from "../../styled/NavigationButtonsContainer/NavigationButtonsContainer.js";
import NavigationButton from "../../styled/NavigationButton/NavigationButton.js";

const SubcategoryForm = ({ nextStep, prevStep, handleChange, values }) => {
  const selectSubcategoryAndContinue = (subcategory) => {
    handleChange("subcategory")(subcategory);
    nextStep();
  };

  const goBack = () => {
    prevStep();
  };

  const categorySubcategories = {
    Edificio: [
      "Daños estructurales",
      "Problemas de electricidad",
      "Fugas de agua",
    ],
    Garaje: [
      "Problemas de puerta",
      "Iluminación defectuosa",
      "Espacios de estacionamiento incorrectos",
    ],
    Trastero: [
      "Falta de espacio",
      "Problemas de seguridad",
      "Acceso restringido",
    ],
    "Áreas comunes": ["Limpieza", "Mantenimiento de jardines", "Ruido"],
    Seguridad: ["Robo", "Vandalismo", "Problemas de iluminación"],
  };

  const subcategories = categorySubcategories[values.category] || [];

  return (
    <div>
      <PageTitle>¿Que problema esta reportando?</PageTitle>
      <FormButtonContainer>
        {subcategories.map((subcategory) => (
          <FormButton
            key={subcategory}
            onClick={() => selectSubcategoryAndContinue(subcategory)}
          >
            {subcategory}
          </FormButton>
        ))}
      </FormButtonContainer>
      <NavigationButtonsContainer>
        <NavigationButton onClick={goBack}>Volver</NavigationButton>
      </NavigationButtonsContainer>
    </div>
  );
};

export default SubcategoryForm;
