import styled from 'styled-components';

const SearchbarWrap = styled.div`
  width: 88%;
  max-width: 1000px;
  height: 40px;
  border-radius: 59px;
  border: 1px solid var(--mid-grey-color);
  padding: 0px 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  // gap: 8px;

  & img {
    width: 16px;
    margin-bottom: 1px;
  }

  & input {
    color: var(--grey-color);
    font-size: 16px;
    // -webkit-appearance: none;
    // -moz-appearance: none;
    border: none;
    height: 100%;
    width: 100%;
    padding: 4px 8px;
    box-sizing: border-box;
    outline: none;
    border-radius: 15px;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--mid-grey-color);
      font-size: 16px;
      font-weight: 400;
      line-height: 18.75px;
    }

    & input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus
    input:-webkit-autofill,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      border:none !important;
      -webkit-text-fill-color: inherit !important;
      -webkit-box-shadow: 0 0 0px 1000px #FFFFFF inset;
      transition: background-color 5000s ease-in-out 0s;
      color: inherit;
    };
  }
`;

export default SearchbarWrap;