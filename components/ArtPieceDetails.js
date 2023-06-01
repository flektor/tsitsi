import Image from "next/image";
import React from "react";
import FavoriteButton from "./FavoriteButton";

export default function ArtPieceDetails({
  name,
  slug,
  imageSource,
  year,
  genre,
  artist,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <>
      <h2>{name}</h2>
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
        slug={slug}
      />
      <Image src={imageSource} alt={name} width={300} height={300} />
      Artist: <strong>{artist}</strong> {year}
      Genre: <span aria-label="genre">{genre}</span>
    </>
  );
}
