import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Fragment } from "react";
export default function ArtPieces({ pieces }) {
  return (
    <div>
      ArtPieces
      {pieces.map((piece) => (
        <Fragment key={piece.slug}>
          <h2>{piece.name}</h2>
          <Image
            src={piece.imageSource}
            alt={piece.name}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }} // optional
          />
          Artist: <strong>{piece.artist}</strong>
          <Link href={`/${piece.slug}`} pieces={pieces} >Spotlight</Link>
         <Link href={`${piece.slug}`} >ArtPieceDetails</Link>
        </Fragment>
      ))}
    </div>
  );
}
