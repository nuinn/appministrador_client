import React from "react";
import styled from "styled-components";
import PageTitle from "../../styled/PageTitle/PageTitle.js";

const AlignText = styled.div`
text-align: left;
margin-left: 20px;
`;

const Confirmation = () => {
  return (
    <div>
      <PageTitle>Confirmación</PageTitle>
      <AlignText>
      <p>Su informe de incidencia ha sido enviada con éxito.</p>
      </AlignText>
    </div>
  );
};

export default Confirmation;
