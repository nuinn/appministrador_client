import styled from "styled-components";

const NavigationButton = styled.button`
  display: inline-flex; // Aligns items in the center
  justify-content: center; // Centers text horizontally
  align-items: center; // Centers text vertically
  border: none;
  border-radius: 5px; // Rounded corners
  padding: 10px 20px; // Padding for button size
  margin: 10px; // Space between buttons
  min-width: 100px; // Minimum button width
  background-color: #591002; // Button color
  color: white; // Text color
  text-decoration: none;
  font-size: 16px;
  transition: background-color 0.3s ease; // Transition for button hover effect

  // Button hover effect
  &:hover {
    background-color: #300000;
    cursor: pointer;
  }

  // Button active state
  &:active {
    background-color: #2e7031;
  }

  // Media query for larger screens
  @media (min-width: 768px) {
    min-width: 150px; // Larger button width for larger screens
  }
`;

export default NavigationButton;
