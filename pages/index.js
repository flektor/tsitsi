import ArtPieces from "../components/ArtPieces";

export default function HomePage({pieces}) {
  console.log(pieces)
  return (
    <div>
      <ArtPieces pieces={pieces} />
    </div>
  );
}
