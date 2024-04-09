import React from "react";
import styled from "styled-components";
import PageTitle from "../../styled/PageTitle/PageTitle.js";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner.jsx";

const AlignText = styled.div`
text-align: left;
margin-left: 20px;
`;

function Confirmation(props) {
  const { data, isLoading } = props
  return (
    <div>
      {isLoading && <LoadingSpinner />}
      {data &&
      <>
        <PageTitle>Confirmación</PageTitle>
        <AlignText>
        <p>Su informe de incidencia ha sido enviada con éxito.</p>
        </AlignText>
      </>
      }
    </div>
  );
};

export default Confirmation;
