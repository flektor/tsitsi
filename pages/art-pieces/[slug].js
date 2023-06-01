import { useRouter } from "next/router.js";
import ArtPieceDetails from "../../components/ArtPieceDetails";
import PageNotFound from "../../components/pageNotFound";
export default function ArtDetails({ pieces }) {
  const router = useRouter();

  if (!pieces || pieces.length === 0) {
    return null;
  }

  const slug = router.query.slug;

  const piece = pieces.find((piece) => piece.slug === slug);

  if (!piece) {
    return <PageNotFound />;
  }

  return <ArtPieceDetails {...piece} />;
}
