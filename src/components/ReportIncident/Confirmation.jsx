import { useNavigate } from 'react-router-dom'
import styled from "styled-components";
import PageTitle from "../../styled/PageTitle/PageTitle.js";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";
import NavigationButtonsContainer from "../../styled/NavigationButtonsContainer/NavigationButtonsContainer.js";
import NavigationButton from "../../styled/NavigationButton/NavigationButton.js";
import StyledButton from "../styled/Button/Button.js"

const AlignText = styled.div`
  // text-align: left;
  // margin-left: 20px;
  & p {
    // font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 16px;
  }
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`

function Confirmation(props) {
  const { data, isLoading } = props
  const navigate = useNavigate()
  return (
    <StyledContainer>
      {isLoading && <LoadingSpinner />}
      {data &&
      <>
        <PageTitle>Confirmación</PageTitle>
        <AlignText>
        <p>Su informe de incidencia ha sido enviado con éxito.</p>
        </AlignText>
        <NavigationButtonsContainer>
          <StyledButton $width='224px' onClick={ () => navigate('/incidencias') }>Volver a Incidencias</StyledButton>
        </NavigationButtonsContainer>
      </>
      }
    </StyledContainer>
  );
};

export default Confirmation;
