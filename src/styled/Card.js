import styled from "styled-components";

export default styled.div`
  border: 2px solid #020826;
  border-radius: 10px;
  font-family: "Montserrat", sans-serif;
  box-shadow: 8px 8px #020826;
  background-color: #f9f4ef;
  padding: 0.8rem;
  margin-bottom: 1.5rem;

  @media (min-width: 460px) {
    border: 3px solid #020826;
    margin-bottom: 2rem;
    padding: 1.5rem;
  }

  @media (min-width: 600px) {
    border: 4px solid #020826;
    margin-bottom: 2rem;
    padding: 2rem;
  }
`;
