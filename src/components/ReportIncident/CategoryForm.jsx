import React from "react";
import FormButton from "../../components/ReportIncident/FormButton.jsx";
import FormButtonContainer from "../../components/ReportIncident/FormButtonContainer.jsx";
import PageTitle from "../../styled/PageTitle/PageTitle.js";


const CategoryForm = ({ nextStep, handleChange, values }) => {
  const selectCategoryAndContinue = (category) => {
    handleChange("category")(category);
    nextStep();
  };

  const categories = [
    "Edificio",
    "Garaje",
    "Trastero",
    "Áreas comunes",
    "Seguridad",
  ];

  return (
    <div>
      <PageTitle>Ubicación del incidente</PageTitle>
      <FormButtonContainer>
        {categories.map((category) => (
          <FormButton
            key={category}
            onClick={() => selectCategoryAndContinue(category)}
          >
            {category}
          </FormButton>
        ))}
      </FormButtonContainer>
    </div>
  );
};

export default CategoryForm;
