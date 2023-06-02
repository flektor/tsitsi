import React from "react";
import FavoriteIcon from "./FavoriteIcon.js";
import styled from "styled-components";

const FavoriteButtonStyled = styled.button`
  background-color: transparent;
  border: 0;
`;

export default function FavoriteButton({
  slug,
  isFavorite,
  onToggleFavorite,
  width,
  height,
}) {
  return (
    <FavoriteButtonStyled
      type="button"
      aria-label="favorite"
      onClick={() => onToggleFavorite(slug)}
    >
      {isFavorite ? (
        <FavoriteIcon fillColor="red" width={width} height={height} />
      ) : (
        <FavoriteIcon width={width} height={height} />
      )}
    </FavoriteButtonStyled>
  );
}
