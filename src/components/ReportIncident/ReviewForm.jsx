import styled from "styled-components";
import { useLoggedUserContext } from "../../contexts/loggedUserContext";
import Detail from "../Detail/Detail";
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
  const { loggedUser } = useLoggedUserContext()
  const goNext = () => {
    nextStep();
  };

  const goBack = () => {
    prevStep();
  };

  function createTitle(incident) {
    const isSecurityIssue = incident.location === 'Seguridad'
    let title = ''
    isSecurityIssue ? title = incident.subcategory.problem : title = `${incident.subcategory.problem} en ${incident.location}`
    console.log('titleinfunc', title)
    return title
  }

  const title = createTitle(values)
  console.log('title', title)
  const date = new Date().toString()
  const images = values.image.map((img) => URL.createObjectURL(img))

  console.log(images)

  return (
    // <></>
    <Detail
      title={title}
      description={values.description}
      images={images}
      category={values.subcategory.category}
      owner={loggedUser}
    />
    // <div>
    //   <PageTitle>Revise su informe de incidencia</PageTitle>
    //   <ReviewContainer>
    //     <AlignTextLeft>
    //   <h4>La incidencia: {values.subcategory}</h4>
    //   <h4>Donde: {values.category}</h4><br/>
    //   <h4>Descripción:</h4>
    //   <p>{values.description}</p><br/>
    //   <h4>Fotos:</h4><br/>
    //   </AlignTextLeft>
      // {values.image
      //   .filter((photo) => photo != null)
      //   .map((photo, i) => (
      //     <img
      //       key={i}
      //       src={URL.createObjectURL(photo)}
      //       alt={`Preview ${i}`}
      //       width="300"
      //       height="300"
      //       style={{ objectFit: "contain" }}
      //     />
      //   ))}
    //     </ReviewContainer>
    //   <NavigationButtonsContainer>
    //     <NavigationButton onClick={goBack}>Volver</NavigationButton>
    //     <NavigationButton onClick={goNext}>Enviar</NavigationButton>
    //   </NavigationButtonsContainer>
    // </div>
  );
};

export default ReviewForm;
