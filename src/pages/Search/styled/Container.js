import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: height .5s;

  & .filter-container {
    transition: height .5s;
    height: 160px;
  }

  & .hidden {
    height: 39px;

  }
`;

export default Container;