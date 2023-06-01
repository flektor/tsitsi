import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ArtPieces({ pieces }) {
  if (!pieces || pieces.length === 0) {
    return "There is nothing to display";
  }

  const items = pieces.map((piece) => (
    <li key={piece.slug}>
      <h2>{piece.name}</h2>
      <Image
        src={piece.imageSource}
        alt={piece.name}
        width={100}
        height={100}
        // sizes="100vw"
        // style={{ width: "100%", height: "auto" }} // optional
      />
      Artist: <strong aria-label="artist">{piece.artist}</strong>
      <Link href={`/art-pieces/${piece.slug}`} pieces={pieces}>
        Details
      </Link>
    </li>
  ));

  return (
    <div>
      ArtPieces
      <ul aria-label="artPieces">{items}</ul>
    </div>
  );
}
