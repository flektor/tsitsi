import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: 100%;
  color: white;
  background-color: var(--background-color);
  overflow: hidden;
  border: 3px solid white;
  border-radius: 1em;
  font-size: large;
`;
const Button_styled = styled.button`
  background-color: #4caf50; /* grey */
  border-radius: 1em;
  border: none;
  color: white;
  padding: 1em;
  text-decoration: none;
  float: right;
`;

export default function CommentForm({ slug, onSubmitComment }) {
  function onSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    event.target.reset();
    event.target.elements[0].focus();

    onSubmitComment(slug, data.context);
  }

  return (
    <form onSubmit={onSubmit}>
      <StyledTextarea name="context" rows={3} required />
      <Button_styled type="submit">Comment</Button_styled>
    </form>
  );
}
