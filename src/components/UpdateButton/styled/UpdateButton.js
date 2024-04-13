import styled from 'styled-components';

const UpdateButton = styled.div`
  width: 100px;
  height: 28px;
  border-radius: 51px;
  background-color: var(--main-color);
  font-weight: 300;
  font-size: 14px;
  transition: .2s;
  cursor: pointer;
  align-self: flex-end;
  position: absolute;
  color: white !important;
  bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:active, &:hover {
    transform: scale(0.95);
    background-color: var(--secondary-color);
  }
`;

export default UpdateButton;