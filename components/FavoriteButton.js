import React from "react";

export default function FavoriteButton({ slug, isFavorite, onToggleFavorite }) {
  return (
    <button type="button" onClick={() => onToggleFavorite(slug)}>
      {isFavorite ? "🖤" : "❤️"}
    </button>
  );
}
