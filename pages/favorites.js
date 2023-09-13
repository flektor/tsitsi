import Image from "next/image";
import Link from "next/link";
import React from "react";
import FavoriteButton from "../components/FavoriteButton";
import { calculateAspectRatioFit } from "../utils/fit-image";
import useResize from "../hooks/useResize";
import styled from "styled-components";

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

const ArtPieceFooter = styled.footer`
  display: flex;
  justify-content: space-between;
`;


const Main = styled.main`
  min-height: 100%;
`;

const Content = styled.div`
  min-height: ${() => window.innerHeight * .86 + "px"};
`;

const Footer = styled.footer`
height: 3em;
display: flex;
justify-content: center;
align-items: center;
bottom: 0;
width: 100%; 
bottom: 0;
`;


export default function favorites({ pieces, onToggleFavorite, artPiecesInfo }) {
  const windowSize = useResize();

  if (!pieces || pieces.length === 0) {
    return "There is nothing to display";
  }

  const favorites = artPiecesInfo
    .filter((item) => item.isFavorite)
    .map((item) => item.slug);

  const maxWidth = windowSize.width * 0.95;
  const maxHeight = windowSize.height * 0.85;

  const items = pieces
    .filter((item) => favorites.includes(item.slug))
    .map((piece) => {
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
          <h3>{piece.name}</h3>

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
          <ArtPieceFooter>
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
          </ArtPieceFooter>
        </ArtPiecesListItem>
      );
    });

  return (
    <Content>
      <Main>
        {items.length === 0 && "You do have not favorites yet!"}
        <ArtPiecesList aria-label="artPieces">{items}</ArtPiecesList>
      </Main>
      <Footer>Tsitsi® @SPICED Academy 2023 </Footer>
    </Content>
  );
}
