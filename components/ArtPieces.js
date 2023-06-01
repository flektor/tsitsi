import Image from "next/image";
import React from "react"; 
import Link from "next/link";

 
export default function ArtPieces({ pieces }) {
  if (!pieces || pieces.length === 0) {
    return "There is nothing to display";
  }
  
  const items = pieces.map((piece) => (
    <li key={piece.slug}>
      <h2>{piece.name}</h2>

      <Image
        src={
          "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
        }
        alt={piece.name}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }} // optional
      />

      Artist: <strong aria-label="artist">{piece.artist}</strong>
      <Link href={`/${piece.slug}`} pieces={pieces} >Spotlight</Link>
      <Link href={`/art-pieces/${piece.slug}`}  pieces={pieces}>Art-Piece Details</Link>
    </li>
  ))

  return (
    <div>
      ArtPieces 
      <ul aria-label="artPieces">
       {items}
      </ul>
    </div>
  );
}
