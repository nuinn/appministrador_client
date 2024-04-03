import styled from 'styled-components';

const FormContainer = styled.form`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;

  & .inputsContainer {
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    & div {
      width: 300px;
      height: 48px;
    }
  }

  & .submitContainer {
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & div {
      height: 50%;
    }

    & .optionsContainer {
      height: 50%;
      width: 300px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;

      & {
        font-size: 12px;
        color: white;
      }

      & label {
        display: grid;
        grid-template-columns: 1em auto;
        gap: 0.5em;

        & input {
          appearance: none;
          margin: 0;
          font: inherit;
          color: white;
          width: 1.15em;
          height: 1.15em;
          border: 0.15em solid white;
          border-radius: 0.15em;
          transform: translateY(-0.075em);
          display: grid;
          place-content: center;
        }

        input::before {
          content: "";
          width: 0.65em;
          height: 0.65em;
          transform: scale(0);
          transition: 120ms transform ease-in-out;
          box-shadow: inset 1em 1em var(--main-color);
        }

        input:checked::before {
          transform: scale(1);
        }
      }
    }

    & .buttonContainer {
      height: 50%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      padding-top: 8px;

      & input {
        width: 300px;
        height: 48px;
        border-radius: 24px;
        background-color: var(--secondary-color);
        color: white;
        // background: none;
        border: none;
        outline: none;
        box-shadow: none;
        font-size: 18px;
        font-weight: 400;
        transition: .2s;
        cursor: pointer;

        &:active, &:hover {
          transform: scale(0.95);
          background-color: var(--main-color);
        }
      }
    }
  }
`;

export default FormContainer;