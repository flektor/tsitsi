import React from "react";
import Navigation from "./Navigation";
import styled from "styled-components";

const LayoutStyled = styled.div``;

const Children = styled.main`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

export default function Layout({ children }) {
  return (
    <LayoutStyled>
      <Navigation>
        <Children>{children}</Children>
      </Navigation>
    </LayoutStyled>
  );
}
