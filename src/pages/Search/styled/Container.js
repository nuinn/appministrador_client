import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & .filter-container {
    height: 148px;
  }

  & .hidden {
    height: 28px;
  }
`;

export default Container;