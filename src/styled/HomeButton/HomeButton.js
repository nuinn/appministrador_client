import styled from 'styled-components';

const HomeButton = styled.button`
  background-color: #FEFEFE;
  border: 0;
  box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.15);
  border-radius: 59px;
  width: 96px;
  height: 96px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & p {
      margin: 0;
      text-decoration: none;
      font-size: small;
      color: var(--secondary-color);
  }

  & div {
      overflow: hidden;
      width: 50px;
      height: 50px;

      & img {
          object-fit: contain;
          width: 100%;
          height: 100%;
      }
  }
`

export default HomeButton