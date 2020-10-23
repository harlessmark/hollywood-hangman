import styled from "styled-components";

export default styled.button`
  font-family: "Montserrat", sans-serif;
  box-shadow: 8px 8px rgb(2, 8, 38);
  background-color: #8c7851;
  border: 2px solid #020826;
  font-weight: bold;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  color: #fffffe;
  margin-right: ${props => (props.leftButton ? "1rem" : 0)};

  :hover {
    cursor: pointer;
    box-shadow: 9px 10px 1px rgb(2, 8, 38, 0.96);
    position: relative;
    bottom: 1px;
  }

  :focus {
    outline: none;
  }

  @media (max-width: 376px) {
    padding: 1rem;
  }

  @media (min-width: 460px) {
    padding: 1rem 2rem;
    border: 3px solid #020826;
    font-size: 1.1rem;
  }

  @media (min-width: 600px) {
    padding: 1rem 2rem;
    border: 3px solid #020826;
    font-size: 1.5rem;
  }
`;
