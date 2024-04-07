import categorySubcategories from '../../files/incidentsCategories.js'
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

  const subcategories = categorySubcategories[values.location] || [];

  return (
    <div>
      <PageTitle>¿Qué problema está reportando?</PageTitle>
      <FormButtonContainer>
        {subcategories.map((subcategory) => (
          <FormButton
            key={subcategory.problem}
            onClick={() => selectSubcategoryAndContinue(subcategory)}
          >
            {subcategory.problem}
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
