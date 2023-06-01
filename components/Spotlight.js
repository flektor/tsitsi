import Link from "next/link";
import useSWR from "swr";
import Image from "next/image";
import { useRouter } from "next/router.js";
import { useEffect, useState } from "react";

export default function Spotlight({ pieces }) {
  const [piece, setPiece] = useState(getRandomPieceArt());

  function getRandomPieceArt() {
    return pieces[Math.floor(Math.random() * pieces.length)];
  }

  return (
    <>
      <h1>{piece.slug}</h1>

      <strong>
        <h2>{piece.slug}</h2>
        <Link href={`/`}>Pieces</Link>
        <Image
          src={piece.imageSource}
          alt={`Cover image of ${piece.name}`}
          width={piece.dimensions.width}
          height={piece.dimensions.height}
          priority={true}
        />
        <i>Artist :{piece.artist}</i>
      </strong>

      <button type="button" onClick={() => setPiece(getRandomPieceArt())}>
        Random Art Piece
      </button>
    </>
  );
}
