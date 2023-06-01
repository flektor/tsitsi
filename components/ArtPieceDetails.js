import Image from "next/image";
import React from "react";
import FavoriteButton from "./FavoriteButton";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import styled from "styled-components";

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

export default function ArtPieceDetails({
  name,
  slug,
  imageSource,
  year,
  genre,
  artist,
  isFavorite,
  onToggleFavorite,
  colors,
  comments = [],
  onSubmitComment,
}) {
  return (
    <>
      <h2>{name}</h2>
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
        slug={slug}
      />
      <Image src={imageSource} alt={name} width={300} height={300} />
      Artist: <strong>{artist}</strong> {year}
      Genre: <span aria-label="genre">{genre}</span>
      <Colors>
        {colors.map((color, index) => (
          <li key={index}>
            <Color color={color}></Color>
          </li>
        ))}
      </Colors>
      <hr />
      <CommentForm slug={slug} onSubmitComment={onSubmitComment} />
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <Comment context={comment} />
          </li>
        ))}
      </ul>
    </>
  );
}
