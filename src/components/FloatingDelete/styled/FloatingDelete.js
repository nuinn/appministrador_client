import styled from "styled-components";

const FloatingDelete = styled.div`
  height: 36px;
  border-radius: 36px;
  position: absolute;
  background-color: var(--light-grey-color);
  right: ${props => props.$right ? props.$right : '8px'};
  top: ${props => props.$top ? props.$top : '104px'};
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.15);
  transition: .2s ease;

  &:hover, &:active {
    transform: scale(0.9);
  }

  & p {
    // color: var(--secondary-color);
    color: white;
    font-weight: 300;
  }

  & img {
    width: 16px;
  }
`;

export default FloatingDelete;