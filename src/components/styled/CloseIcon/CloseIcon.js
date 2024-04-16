import styled from 'styled-components';

const CloseIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 100%;
  background-color: var(--grey-color);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -18px;
  right: -9px;
  transition: .2s;

  &:active, &:hover {
    transform: scale(0.9);
  }
`;

export default CloseIcon;