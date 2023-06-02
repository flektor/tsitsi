import { useRouter } from "next/router.js";
import ArtPieceDetails from "../../components/ArtPieceDetails";
import PageNotFound from "../../components/pageNotFound";
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
    <ArtPieceDetails
      {...piece}
      isFavorite={isFavorite}
      onToggleFavorite={onToggleFavorite}
      colors={piece.colors}
      onSubmitComment={onSubmitComment}
      comments={artPieceInfo.comments}
      imageDimensions={piece.dimensions}
    />
  );
}
