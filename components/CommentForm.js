import React from "react";

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
      <textarea name="context" rows={4} required></textarea>
      <button type="submit">Comment</button>
    </form>
  );
}
