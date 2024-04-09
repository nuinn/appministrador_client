import styled from 'styled-components';

const FormButton = styled.button`
background-color: #024B59;
border: none;
color: white;
padding: 15px 32px;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
// display: inline-block;
font-size: 16px;
margin: 4px 2px;
cursor: pointer;
width: 160px;
height: 85px;
border-radius: 5px;
user-select: none;
transition: background-color 0.3s ease; // Transition for button hover effect
&:hover {
  background-color: #01363b;
  cursor: pointer;
}
`;

export default FormButton;
