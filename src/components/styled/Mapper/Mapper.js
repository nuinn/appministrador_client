import styled from 'styled-components';

const Mapper = styled.div`
  padding: 8px 8px 24px;
  width: 370px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 32px;
  border: 1px solid var(--light-grey-color);
  border-radius: 32px;
  box-shadow: 2px 2px 6px 0px #85858540;
  margin-right: 24px;

  & .title {
    font-size: 20px;
    color: var(--secondary-color);
    text-align: center;
    line-height: 24px;
    margin-bottom: 8px;
    align-self: center;
  }
`;

export default Mapper;