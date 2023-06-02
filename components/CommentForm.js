import React from "react";
import styled from "styled-components";
const StyledTextarea = 
    styled.textarea`
    width: 100%;
    overflow: hidden;
    outline: none;
    border: none;
    padding:2em; 
    border: 3px solid gray;
    color: silver;
    font-size: 14px;
    padding-left: 10px;
    border:2px solid red;
    border-radius:7px;
    font-size:18px;
    border-radius: 8px;
    padding:5px; 
  `; 
  const Button_styled = styled.button`
  background-color: #4CAF50; /* grey */
  border:2px solid red;
  color: white;
  padding: 20px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 8px;
  text-align: center;

`;
const comment_div= styled.div
`display: flex;
background-color: DodgerBlue;.
text-align: center;
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
      <StyledTextarea name="context" rows={4} required />
      <Button_styled type="submit">Comment</Button_styled> 
    </form>
     

  );
}
