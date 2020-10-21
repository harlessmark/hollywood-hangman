import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: ${props => {
    if (props.flexStart) return "flex-start";
    if (props.flexEnd) return "flex-end";
    if (props.spaceBetween) return "space-between";
  }};
`;
