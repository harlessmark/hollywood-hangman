import styled from "styled-components";

export default styled.p`
  font-family: "Montserrat", sans-serif;
  margin: ${props => (props.movie ? ".5rem 0" : "0")};
  color: pink;
`;
