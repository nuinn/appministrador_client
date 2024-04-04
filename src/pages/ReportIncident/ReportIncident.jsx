import React, { useState, useEffect } from "react";
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
    description: "",
    image: [],
  });

  console.log(incident);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (input) => (value) => {
    setIncident({ ...incident, [input]: value });
  };

  const handleFileChange = (index, e) => {
    if (e.target.files.length > 0) {
      const newPhotos = [...incident.image];
      newPhotos[index] = e.target.files[0];
      setIncident({ ...incident, image: newPhotos });
    }
  };

  
  const handleSubmit = () => {
    const date = new Date();
    const title = `${incident.subcategory} en ${incident.category}`
    const owner = '660473d03bc750e48fe082d6'
    const community = '65a732acd06ef98cb6409214'
    
    const incidentWithMetaData = {
      ...incident,
      date: date,
      title: title,
      owner: owner,
      community: community,
      status: 'Pendiente',
    };
    
    nextStep();
    
    // Convert the new object to FormData
    const formData = new FormData();
    Object.keys(incidentWithMetaData).forEach((key) => {
      if (key === "image") {
        incidentWithMetaData.image.forEach((image) => {
          formData.append('image', image);
        });
      } else {
        // Convert object values to string
        formData.append(key, (incidentWithMetaData[key]));
      }
    });
    
    fetch("http://localhost:3003/incidents/create", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
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
