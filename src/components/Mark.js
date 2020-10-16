import React from "react";
import styled from "styled-components";
import { ReactComponent as MarkSVG } from "../assets/mark.svg";

const Card = styled.div`
  border: 2px solid #020826;
  border-radius: 10px;
  font-family: "Montserrat", sans-serif;
  box-shadow: 8px 8px #020826;
  background-color: #f9f4ef;
  padding: 0.8rem;
`;

const H3 = styled.h3`
  color: #716040;
  margin: 0 0 0 1rem;
`;

const Speech = styled.p`
  border: 2px solid #020826;
  padding: 1rem;
  margin-bottom: 0;
  background-color: #fffffe;
  border-radius: 10px;
`;

function Mark(props) {
  return (
    <Card>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <MarkSVG style={{ height: "100px", margin: "-10px" }} />
        <div>
          <H3>Mark, The Movie Buff</H3>
          <p style={{ margin: "2px 0 0 1rem" }}>{props.status}</p>
        </div>
      </div>
      <Speech>{props.dialogue}</Speech>
    </Card>
  );
}

export default Mark;
