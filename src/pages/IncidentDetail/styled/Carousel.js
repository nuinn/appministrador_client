import styled from "styled-components";

const Carousel = styled.div`
  width: 100%;
  height: 200px;
  background-color: rgba(171, 23, 47, 0.3);
  border-radius: 0px 0px 32px 32px;
  background-image: url(${props => props.$image});
  background-repeat: no-repeat;
  // background-attachment: fixed;
  background-position: center;
  margin-bottom: 24px;
`;

export default Carousel;