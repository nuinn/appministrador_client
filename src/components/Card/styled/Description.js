import styled from 'styled-components';

const Description = styled.div`
  padding: 24px 0;
  font-size: 14px;
  // height: 50px;
  width: 200px;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  gap: 6px;

  & .contentFlex {
    display: flex;
  }

  & p {
    margin: 0;
    line-height: 1.25em;
    color: var(--grey-color);
    font-style: normal;
    font-weight: 300;
    font-size: .75em;
    letter-spacing: 0.3px;
  }

  & h3, h4, h5 {
    color: var(--secondary-color);
    margin-top: 3px;
    font-weight: 400;
  }

  & h3 {
    margin: 0;
    font-size: 1em;
    text-wrap: wrap;
    letter-spacing: 0.2px;
  }

  & h4 {
    font-size: 0.85em;
  }

  & h5 {
    font-weight: 500;
    font-size: 0.7em;
  }

  & li {
    font-weight: 600;
    list-style-type: none;

  }
`;

export default Description