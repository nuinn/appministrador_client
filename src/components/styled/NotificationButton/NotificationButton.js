import styled from 'styled-components';

const NotificationButton = styled.div`
  width: auto;
  border-bottom: 1px solid var(--light-grey-color);
  margin: -24px 0px 24px;
  height: 44px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${ props => props.$bgcolor ? props.$bgcolor : 'var(--secondary-color)'};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Inter", sans-serif;
  font-weight: 300;
  font-size: 15px;
  transition: .2s;
  padding: 2px 8px;
  text-align: center;
  z-index: 0;
  position: relative;
  user-select: none;

  & p {
    cursor: pointer;
  }

  & div{
    position: absolute;
    right: 0px;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    cursor: pointer;

    & img {
      transform: scaleY(-1);
      filter: grayscale(100%) invert(100%) brightness(200%);
      width: 15px;
      height: 10px;
    }
  }
`;

export default NotificationButton