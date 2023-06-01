import ArtPieces from "../../components/ArtPieces";
import dynamic from 'next/dynamic';

export default function Index({pieces}) {
  return (
    <div>
      <ArtPieces pieces={pieces} />
    </div>
  );
}