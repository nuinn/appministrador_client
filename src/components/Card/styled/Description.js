import styled from 'styled-components';

const Description = styled.div`
  padding: 24px;
  font-size: 14px;

  & p {
      margin: 0;
      line-height: 1.5em;
      color: var(--grey-color);
      font-style: normal;
      font-weight: 400;
      font-size: small;
  }

  & h3 {
      margin: 0;
      font-size: 1.17em;
      color: var(--secondary-color);
  }
`;

export default Description