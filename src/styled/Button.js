import styled from "styled-components";

export default styled.button`
  font-family: "Montserrat", sans-serif;
  box-shadow: 8px 8px rgb(2, 8, 38);
  background-color: #8c7851;
  border: 2px solid #020826;
  font-weight: bold;
  border-radius: 10px;
  height: 3rem;
  width: 9rem;
  font-size: 1rem;
  color: #fffffe;

  :hover {
    cursor: pointer;
    box-shadow: 9px 10px 1px rgb(2, 8, 38, 0.96);
    position: relative;
    bottom: 1px;
  }

  :focus {
    outline: none;
  }
`;
