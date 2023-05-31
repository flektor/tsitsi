import Image from "next/image";
import React from "react";

export default function ArtPieces({ pieces }) {
  return (
    <div>
      ArtPieces
      <ul aria-label="artPieces">
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <h2>{piece.name}</h2>
            {/* <Image
            src={piece.imageSource}
            alt={piece.name}
            height={piece.dimensions.height}
            width={piece.dimensions.width}
            sizes="100vw"
        /> */}
            <Image
              src={piece.imageSource}
              alt={piece.name}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }} // optional
            />
            Artist: <strong>{piece.artist}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
