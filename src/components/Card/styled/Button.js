import styled from 'styled-components';

const Button = styled.div`
background-color: var(--main-color);
width: 170px;
height: 20px;
border-radius: 50px;
color: white;
font-size: 13px;
display: flex;
justify-content: center;
align-items: center;
margin-left: -14px;
font-weight: 300;
cursor: pointer;
transition: .2s;

&:active, &:hover {
  transform: scale(0.95);
}
`;

export default Button;