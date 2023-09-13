import { useRouter } from "next/router.js";
import ArtPieceDetails from "../../components/ArtPieceDetails";
import PageNotFound from "../../components/pageNotFound";

import styled from "styled-components";

const Main = styled.main`
  height:100%;
`;

const Footer = styled.footer`
height: 3em;
display: flex;
justify-content: center;
align-items: center;
width: 100%; 
bottom: 0;
margin-top:-.8em;
`;


export default function ArtDetails({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
  onSubmitComment,
}) {
  const router = useRouter();

  if (!pieces || pieces.length === 0) {
    return null;
  }

  const slug = router.query.slug;

  const piece = pieces.find((piece) => piece.slug === slug);

  if (!piece) {
    return <PageNotFound />;
  }

  const artPieceInfo =
    artPiecesInfo.find((item) => item.slug === piece.slug) ?? false;

  const isFavorite = artPieceInfo && artPieceInfo.isFavorite;
  return (
    <div>
      <Main>
        <ArtPieceDetails
          {...piece}
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
          colors={piece.colors}
          onSubmitComment={onSubmitComment}
          comments={artPieceInfo.comments}
          imageDimensions={piece.dimensions}
        />
      </Main>
      <Footer>Tsitsi® @SPICED Academy 2023 </Footer>
    </div >
  );
}
