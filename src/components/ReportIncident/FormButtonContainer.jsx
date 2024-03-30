import styled from 'styled-components';

const FormButtonContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr); // responsive grid with a minimum of 100px per item
grid-gap: 10px;
justify-items: center;
`;

export default FormButtonContainer;

