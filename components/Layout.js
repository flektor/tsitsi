import React from "react";
import Navigation from "./Navigation";
import styled from "styled-components";

const LayoutStyled = styled.div``;

export default function Layout({ children }) {
  return (
    <LayoutStyled>
      <Navigation>{children}</Navigation>;
    </LayoutStyled>
  );
}
