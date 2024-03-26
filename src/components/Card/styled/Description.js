import styled from 'styled-components';

const Description = styled.div`
  padding: 24px 0;
  font-size: 14px;
  width: 200px;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  & p {
    margin: 0;
    line-height: 1.5em;
    color: var(--grey-color);
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
  }

  & h3, h4, h5 {
    color: var(--secondary-color);
    margin-top: 3px;
  }

  & h3 {
    margin: 0;
    font-size: 1.17em;
    text-wrap: wrap;
  }
`;

export default Description