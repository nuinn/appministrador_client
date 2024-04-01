import styled from "styled-components";

const Header = styled.div`
  position: sticky;
  top: 0;
  height: 60px;
  width: auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  z-index: 100;
  background-color: var(--secondary-color);

  & img {
    width: 190px;
    padding-left: 18px;
    cursor: pointer;
  }
`;

export default Header;