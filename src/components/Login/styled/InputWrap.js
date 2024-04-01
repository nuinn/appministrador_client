import styled from "styled-components";

const InputWrap = styled.div`
  display: flex;
  align-items: center;
  border-radius: 24px;
  background: var(--light-grey-color);
  opacity: 0.9;
  border: 1px solid var(--grey-color);
  width: 350px;
  position: relative;
  & input {
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    background: transparent;
    // margin-right: 0;
    border-image: none 100% 1 0 stretch;
    border-style: none;
    border-width: 0;
    color: var(--secondary-color);
    padding: 12px;
    width: 100%;
    outline: none;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: var(--grey-color);
      font-weight: 300;
    }
  }
  & img {
    width: 30px;
    position: absolute;
    right: 10px;
    cursor: pointer;
  }
`;

export default InputWrap;