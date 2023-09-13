import Image from "next/image";
import React from "react";
import FavoriteButton from "./FavoriteButton";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import styled from "styled-components";
import { calculateAspectRatioFit } from "../utils/fit-image";
import useResize from "../hooks/useResize";

const Color = styled.div`
  width: 2em;
  height: 2em;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin: 1em;
`;

const Colors = styled.ul`
  display: flex;
  list-style: none;
`;

const ImageFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  width: 100%;
`;

const Comments = styled.div`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin: 1em;
`;

export default function ArtPieceDetails({
  name,
  slug,
  imageSource,
  imageDimensions,
  year,
  genre,
  artist,
  isFavorite,
  onToggleFavorite,
  colors,
  comments = [],
  onSubmitComment,
}) {
  const windowSize = useResize();
  const maxWidth = windowSize.width * 0.95;
  const maxHeight = windowSize.height * 0.5;

  const { width, height } = calculateAspectRatioFit(
    imageDimensions.width,
    imageDimensions.height,
    maxWidth,
    maxHeight
  );

  return (
    <Content>
      <Header>
        <h2>{name}</h2>

        <FavoriteButton
          onToggleFavorite={onToggleFavorite}
          isFavorite={isFavorite}
          slug={slug}
          width="32px"
          height="32px"
        />
      </Header>

      <Image src={imageSource} alt={name} width={width} height={height} />

      <ImageFooter>
        <span>
          Artist: <strong>{artist}</strong> {year}
        </span>
        <div aria-label="genre">Genre: {genre}</div>
      </ImageFooter>

      <Colors>
        {colors.map((color, index) => (
          <li key={index}>
            <Color color={color}></Color>
          </li>
        ))}
      </Colors>
      <hr />
      <CommentForm slug={slug} onSubmitComment={onSubmitComment} />

      <Comments>
        {comments.map((comment, index) => (
          <li key={index}>
            <Comment context={comment} />
          </li>
        ))}
      </Comments>
    </Content>
  );
}
