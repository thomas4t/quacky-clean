import React from "react";
import styled from "styled-components";
import duckImg from "../images/duck.jpg";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHomepageImage = styled.img`
  width: 70%;
`;

export default function Homepage() {
  return (
    <StyledContainer>
      <h1>Welcome to our HOME PAGE!</h1>
      <h2>We sell ducks and other goodies, make sure you look around!</h2>
      <StyledHomepageImage src={duckImg} />
      <span>(this duck will mess you up if u don't)</span>
    </StyledContainer>
  );
}
