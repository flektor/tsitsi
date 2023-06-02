import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";
import { calculateAspectRatioFit } from "../utils/fit-image";
import useResize from "../hooks/use-resize";

const FavoriteButtonStyled = styled.div`
  position: absolute;
  bottom: 1.5em;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ArtPiecesList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0;
  margin: 0;
  gap: 3em;
`;

const ArtPiecesListItem = styled.li`
  list-style: none;
  max-width: ${(maxWidth) => maxWidth};
  max-height: ${(maxHeight) => maxHeight};
  padding: 0;
  margin: 0;
  position: relative;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

export default function ArtPieces({ pieces, artPiecesInfo, onToggleFavorite }) {
  const windowSize = useResize();

  if (!pieces || pieces.length === 0) {
    return "There is nothing to display";
  }

  const favorites = artPiecesInfo
    .filter((item) => item.isFavorite)
    .map((item) => item.slug);

  const maxWidth = windowSize.width * 0.95;
  const maxHeight = windowSize.height * 0.8;

  const items = pieces.map((piece) => {
    const { width, height } = calculateAspectRatioFit(
      piece.dimensions.width,
      piece.dimensions.height,
      maxWidth,
      maxHeight
    );

    return (
      <ArtPiecesListItem
        key={piece.slug}
        maxWidth={maxWidth + 100}
        maxHeight={maxHeight + 100}
      >
        <h2>{piece.name}</h2>

        <Image
          src={piece.imageSource}
          alt={piece.name}
          width={width}
          height={height}
        />
        <FavoriteButtonStyled>
          <FavoriteButton
            onToggleFavorite={onToggleFavorite}
            isFavorite={favorites.includes(piece.slug)}
            slug={piece.slug}
          />
        </FavoriteButtonStyled>
        <Footer>
          <span>
            Artist: <strong aria-label="artist">{piece.artist}</strong>
          </span>

          <Link
            href={`/art-pieces/${piece.slug}`}
            pieces={pieces}
            style={{ color: "white" }}
          >
            Details
          </Link>
        </Footer>
      </ArtPiecesListItem>
    );
  });

  return <ArtPiecesList aria-label="artPieces">{items}</ArtPiecesList>;
}
