import Image from "next/image";
import { useState } from "react";
import FavoriteButton from "./FavoriteButton";
import useResize from "../hooks/use-resize";
import { calculateAspectRatioFit } from "../utils/fit-image";
import styled from "styled-components";
import Link from "next/link";

export default function Spotlight({ pieces, artPiecesInfo, onToggleFavorite }) {
  const windowSize = useResize();

  const [piece, setPiece] = useState(getRandomPieceArt());

  function getRandomPieceArt() {
    return pieces[Math.floor(Math.random() * pieces.length)];
  }

  const artPieceInfo =
    artPiecesInfo.find((item) => item.slug === piece.slug) ?? false;

  const maxWidth = windowSize.width * 0.95;
  const maxHeight = windowSize.height * 0.8;

  const { width, height } = calculateAspectRatioFit(
    piece.dimensions.width,
    piece.dimensions.height,
    maxWidth,
    maxHeight
  );

  const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  `;

  const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    width: 100%;
  `;

  const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    width: 100%;
  `;
  const FavoriteButtonStyled = styled.div`
    position: absolute;
    bottom: 1.5em;
    display: flex;
    justify-content: center;
    width: 100%;
  `;

  const RandomArtButton = styled.button`
    border: 1px solid white;
    border-radius: 1em;
    height: 3em;
    width: 7em;
    background-color: var(--background-color);
    color: white;

    :hover {
      cursor: pointer;
    }
  `;

  return (
    <Content>
      <Header>
        <h2>{piece.name}</h2>

        <RandomArtButton
          type="button"
          onClick={() => setPiece(getRandomPieceArt())}
        >
          Random Art
        </RandomArtButton>
      </Header>

      <Image
        src={piece.imageSource}
        alt={`Cover image of ${piece.name}`}
        width={width}
        height={height}
      />
      <FavoriteButtonStyled>
        <FavoriteButton
          onToggleFavorite={onToggleFavorite}
          isFavorite={artPieceInfo.isFavorite}
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
    </Content>
  );
}
