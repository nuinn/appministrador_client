import styled from 'styled-components';

const NotificationButton = styled.div`
  width: 370px;
  height: 44px;
  border-radius: 51px;
  background-color: ${ props => props.$bgcolor ? props.$bgcolor : 'var(--secondary-color)'};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 16px;
  transition: .2s;
  cursor: pointer;
  padding: 2px 8px;
  text-align: center;

  &:active, &:hover {
    transform: scale(0.95);
    background-color: var(--main-color);
  }
`;

export default NotificationButton