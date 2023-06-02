import React from "react";
import styled from "styled-components";

const CommentStyled = styled.div`
  width: 100%;

  border: 1px solid white;
  border-radius: 1em;
  padding: 1em;
  margin-right: 1em;
  margin-left: 1em;
`;

export default function Comment({ context, date }) {
  return <CommentStyled>{context}</CommentStyled>;
}
