import { useLoggedUserContext } from "../../contexts/loggedUserContext";
import Detail from "../Detail/Detail";

const ReviewForm = ({ nextStep, prevStep, values }) => {
  const { loggedUser } = useLoggedUserContext()

  function createTitle(incident) {
    const isSecurityIssue = incident.location === 'Seguridad'
    const article = incident.location === 'Exteriores' || incident.location === 'Áreas comunes' ? 'los' : 'el'
    let title = ''
    isSecurityIssue ? title = incident.subcategory.problem : title = `${incident.subcategory.problem} en ${article} ${incident.location.toLowerCase()}`
    return title
  }

  const title = createTitle(values)
  const images = values.image.map((img) => URL.createObjectURL(img))

  return (
    <Detail
      images={images}
      title={title}
      description={values.description}
      owner={loggedUser}
      category={values.subcategory.category}
      nextStep={nextStep}
      prevStep={prevStep}
    />
  );
};

export default ReviewForm;
