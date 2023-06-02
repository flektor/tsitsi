import Link from "next/link";
import React from "react";
import styled from "styled-components";
export default function Navigation({ children }) {
  const _headerlist = styled.ul`
  display: flex;
  flex-flow: row;
  align-items: stretch
  position: fixed;
  list-style: none;
  margin: 0; 
  Background-color: #956b6b;
`;
const _header_listitem = styled.li`
display: flex;
flex-flow: row wrap;
padding:0.5em;
justify-content: flex-end;
list-style: none;
margin: 0.1em; 
font-style: oblique 60deg;
font-family:'AmstelvarAlpha';
font-weight: 900;
`;

  return (
    <div>
      <nav>
      
          <_headerlist>  
          <_header_listitem>ART GALLERY</_header_listitem> 
          <_header_listitem><Link href={"/art-pieces/"}>Pieces</Link></_header_listitem>
          <_header_listitem><Link href={"/"}>Spotlight</Link></_header_listitem>
          <_header_listitem><Link href={"/favorites"}>Favorites</Link></_header_listitem>
        </_headerlist>
      </nav>
      {children}
    </div>
  );
}
