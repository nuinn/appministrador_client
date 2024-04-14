import { useNavigate } from 'react-router-dom'
import styled from "styled-components";
import { useLoggedUserContext } from "../../contexts/loggedUserContext.jsx";
import SinglePhoto from "./SinglePhoto";
import PageTitle from "../../styled/PageTitle/PageTitle.js";
import NavigationButtonsContainer from "../../styled/NavigationButtonsContainer/NavigationButtonsContainer";
import NavigationButton from "../../styled/NavigationButton/NavigationButton";
import StyledButtonContainer from "../Detail/styled/ButtonContainer.js"
import StyledButton from "../styled/Button/Button.js"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`

const PhotosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 30px;
  & .placeholder {
    cursor: pointer;
  }
`;

const StyledMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: var(--mid-grey-color);
  width: auto;
  height: auto;
  padding: 12px 24px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 6px 0px #85858540;

  & p {
    width: 300px;
    text-align: justify;
    font-size: 14px;
    line-height: 20px;
    font-family: "Inter", sans-serif;
    font-weight: 300;
    color: var(--dark-grey-color);
  }

  & h3 {
    color: var(--secondary-color);
    // color: white;
    font-weight: 500;
    font-family: "Inter", sans-serif;
  }
`

const PhotoForm = ({
  nextStep,
  prevStep,
  handleFileChange,
  values,
  setValues,
}) => {
  const { loggedUser } = useLoggedUserContext()
  const navigate = useNavigate()

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
    <StyledContainer>
      <PageTitle>Subir fotos de la incidencia</PageTitle>
      { loggedUser.enableMediaAccess &&
        <PhotosContainer>
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
        </PhotosContainer>
      }
      { !loggedUser.enableMediaAccess &&
        <>
          <StyledMessageContainer>
            <h3>Atención</h3>
            <p>Para subir una foto para este incidente, necesitarás permitir que Tu Appministrador acceda a los archivos multimedia de tu dispositivo en la configuración de la sección Perfil.</p>
          </StyledMessageContainer>
          <StyledButton onClick={ () => navigate('/perfil') } >Ir a Perfil</StyledButton>
        </>
      }
      {/* <NavigationButtonsContainer>
        <NavigationButton onClick={goBack}>Volver</NavigationButton>
        <NavigationButton onClick={goNext}>Siguiente</NavigationButton>
      </NavigationButtonsContainer> */}
      <StyledButtonContainer>
        <StyledButton $bgcolor='var(--main-color)' onClick={prevStep}>Volver</StyledButton>
        <StyledButton onClick={nextStep}>Siguiente</StyledButton>
      </StyledButtonContainer>
    </StyledContainer>
  );
};

export default PhotoForm;
