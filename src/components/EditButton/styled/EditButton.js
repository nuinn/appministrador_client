import { styled } from 'styled-components';

const EditButton = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  background-color: var(--main-color);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -33px;
  top: 0px;
  cursor: pointer;
  transition: .2s;
  user-select: none;
  box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.15);

  &:active, &:hover {
    transform: scale(0.9);
  }

  & img {
    width: 16px;
  }

  & p {
    color: white;
    font-size: 16px;
    // font-weight: 100;
  }
`;

export default EditButton;