import { useNavigate } from 'react-router-dom'
import styled from "styled-components";
import PageTitle from "../../styled/PageTitle/PageTitle.js";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";
import NavigationButtonsContainer from "../../styled/NavigationButtonsContainer/NavigationButtonsContainer.js";
import NavigationButton from "../../styled/NavigationButton/NavigationButton.js";

const AlignText = styled.div`
text-align: left;
margin-left: 20px;
`;

function Confirmation(props) {
  const { data, isLoading } = props
  const navigate = useNavigate()
  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {data &&
      <>
        <PageTitle>Confirmación</PageTitle>
        <AlignText>
        <p>Su informe de incidencia ha sido enviada con éxito.</p>
        </AlignText>
        <NavigationButtonsContainer>
          <NavigationButton onClick={ () => navigate('/incidencias') }>Volver a Incidencias</NavigationButton>
        </NavigationButtonsContainer>
      </>
      }
    </div>
  );
};

export default Confirmation;
