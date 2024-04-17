import styled from "styled-components";

const Header = styled.div`
  position: sticky;
  top: 0;
  height: 60px;
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  background-color: var(--secondary-color);
  user-select: none;

  & .logo {
    width: 217px;
    margin-left: 24px;
    cursor: pointer;
  }

  & .logout {
    height: 34px;
    margin-right: 16px;
    cursor: pointer;
  }
`;

export default Header;