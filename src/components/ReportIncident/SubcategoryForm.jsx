import locationsIssues from '../../files/locationsIssues.js'
import FormButton from "../../components/ReportIncident/FormButton.jsx";
import FormButtonContainer from "../../components/ReportIncident/FormButtonContainer.jsx";
import PageTitle from "../../styled/PageTitle/PageTitle.js";
import NavigationButtonsContainer from "../../styled/NavigationButtonsContainer/NavigationButtonsContainer.js";
import NavigationButton from "../../styled/NavigationButton/NavigationButton.js";
import StyledButtonContainer from "../Detail/styled/ButtonContainer.js"
import StyledButton from "../styled/Button/Button.js"

const SubcategoryForm = ({ nextStep, prevStep, handleChange, values }) => {
  const selectSubcategoryAndContinue = (issue) => {
    handleChange("subcategory")(issue);
    nextStep();
  };

  const issuesCategories = locationsIssues[values.location] || [];

  return (
    <div>
      <PageTitle>¿Qué problema está reportando?</PageTitle>
      <FormButtonContainer>
        {issuesCategories.map((issue) => (
          <FormButton
            key={issue.problem}
            onClick={() => selectSubcategoryAndContinue(issue)}
          >
            {issue.problem}
          </FormButton>
        ))}
      </FormButtonContainer>
      {/* <NavigationButtonsContainer>
        <NavigationButton onClick={prevStep}>Volver</NavigationButton>
      </NavigationButtonsContainer> */}
      <StyledButtonContainer>
        <StyledButton $bgcolor='var(--main-color)' onClick={prevStep}>Volver</StyledButton>
      </StyledButtonContainer>
    </div>
  );
};

export default SubcategoryForm;
