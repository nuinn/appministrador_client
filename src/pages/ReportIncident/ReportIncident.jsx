import React, { useState } from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import CategoryForm from "../../components/ReportIncident/CategoryForm.jsx";
import SubcategoryForm from "../../components/ReportIncident/SubcategoryForm.jsx";
import DescriptionForm from "../../components/ReportIncident/DescriptionForm.jsx";
import PhotoForm from "../../components/ReportIncident/PhotoForm.jsx";
import ReviewForm from "../../components/ReportIncident/ReviewForm.jsx";
import Confirmation from "../../components/ReportIncident/Confirmation.jsx";
import PageContentContainer from "../../styled/PageContentContainer/PageContentContainer.js";

const ReportIncident = () => {
  const [step, setStep] = useState(1);
  const [incident, setIncident] = useState({
    category: "",
    subcategory: "",
    dateTime: "",
    description: "",
    photos: [],
  });

  console.log(incident);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (input) => (value) => {
    setIncident({ ...incident, [input]: value });
  };

  const handleFileChange = (index, e) => {
    if (e.target.files.length > 0) {
      const newPhotos = [...incident.photos];
      newPhotos[index] = e.target.files[0];
      setIncident({ ...incident, photos: newPhotos });
    }
  };

  const handleSubmit = () => {
    setIncident({ ...incident, dateTime: new Date().toISOString() });
    nextStep();
  };

  let form;

  switch (step) {
    case 1:
      form = (
        <CategoryForm
          nextStep={nextStep}
          handleChange={handleChange}
          values={incident}
        />
      );
      break;
    case 2:
      form = (
        <SubcategoryForm
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={incident}
        />
      );
      break;
    case 3:
      form = (
        <PhotoForm
          nextStep={nextStep}
          prevStep={prevStep}
          handleFileChange={handleFileChange}
          values={incident}
          setValues={setIncident}
        />
      );
      break;
    case 4:
      form = (
        <DescriptionForm
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={incident}
        />
      );
      break;
    case 5:
      form = (
        <ReviewForm
          nextStep={handleSubmit}
          prevStep={prevStep}
          values={incident}
        />
      );
      break;
    case 6:
      form = <Confirmation />;
      break;
    default:
      form = <div>Error: Unknown step</div>;
  }

  return (
    <div>
        <PageContentContainer>
      <Header />
      {form}
      <Footer type="incidents" />
      </PageContentContainer>
    </div>
  );
};

export default ReportIncident;
