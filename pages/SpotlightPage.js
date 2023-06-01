import ArtPieces from "../components/ArtPieces";
import dynamic from 'next/dynamic';

export default function SpotlightPage({pieces}) {
  console.log(pieces)
  return (
    <div>
      <Spotlight pieces={pieces} />
    </div>
  );
}
