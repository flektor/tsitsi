import Image from "next/image";
import React from "react";

export default function ArtPieceDetails({
  name,
  imageSource,
  year,
  genre,
  artist,
}) {
  return (
    <>
      <h2>{name}</h2>
      <Image src={imageSource} alt={name} width={300} height={300} />
      Artist: <strong>{artist}</strong> {year}
      Genre: <span aria-label="genre">{genre}</span>
    </>
  );
}
