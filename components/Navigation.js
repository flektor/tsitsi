import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function Navigation({ children }) {
  const Nav = styled.nav`
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #1a1a1a;
    align-items: center;
    z-index: 10;
    height: 3em;  
    /* height: 4em;   */
    /* padding: .5em; */
  `;

  const List = styled.ul`
    display: flex;
    justify-content: flex-end;

    width: 100%;
    list-style: none;
  `;

  const Item = styled.li`
    padding-left: 0.5em;
    padding-right: 0.5em;
    margin-top:  -0.2em;
  `;

  const Title = styled.span`
    justify-content: flex-end;
    font-family: "AmstelvarAlpha";
    padding-left: 1em;
    white-space: nowrap;
    font-size: 1.1em;
    margin-left:-.5em;
  `;

  const Content = styled.div`
    position: relative;
  `;

  const Children = styled.div`
    padding-bottom: 2em;
    margin-top: 4em;
  `;

  const Footer = styled.footer`
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #21252b;
    position: absolute;
    bottom: 0;
    width: 100%;
    margin-top: 10em;
  `;

  return (
    <Content>
      <Nav>
        <Title>
          <Link href={"/"} style={{ color: "white", textDecoration: "none" }}>
            ART GALLERY
          </Link>
        </Title>
        <List>
          {/* <Item>
            <Link href={"/art-pieces/"} style={{ color: "white" }}>
              Art Pieces
            </Link>
          </Item> */}
          <Item>
            <Link href={"/spotlight/"} style={{ color: "white" }}>
              Spotlight
            </Link>
          </Item>
          <Item>
            <Link href={"/favorites"} style={{ color: "white" }}>
              Favorites
            </Link>
          </Item>
        </List>
      </Nav>
      <Children>{children}</Children>

      <Footer>Tsitsi® @SPICED Academy 2023 </Footer>
    </Content>
  );
}
