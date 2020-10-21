import styled from "styled-components";

export default styled.span`
  font-weight: bold;
  color: ${props => (props.score ? "#f25042" : "inherit")};
`;
