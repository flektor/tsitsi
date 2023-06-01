import Link from "next/link";
import useSWR from "swr";
import Image from "next/image";
import { useRouter } from "next/router.js";

export default function ArtPieceDetails({image, title, artist, year, genre}) {

  /* this is the function that retirive random element */
  const router = useRouter();
  const slug =JSON.stringify(router.query)
  const obj = JSON.parse(slug);
  // const { slug } = router.query;
  console.log("the router is : "+ slug)

  const ArtPieceIndex = pieces.findIndex(Element  => Element.slug === obj.Spotlight);
  
  const ArtPiece_Random =      pieces.find(Element  => Element.slug === obj.Spotlight) ;
  console.log("the volumeIndex iss : "+ ArtPieceIndex)
  console.log("the volume isr : "+ ArtPiece_Random)

  function getRandomElement() {
    return pieces[Math.floor(Math.random() * pieces.length)];
  }
  function handelrandomclick(){
    const randomvolume=getRandomElement(ArtPiece_Random)
    router.push(`/${randomvolume.slug}`)
  }


  /*end of random art retrieveal*/


  return (
    <div data-testid="piece-value">
      <h1>{ArtPiece_Random.slug}</h1>

      <strong>
         <h2>{ArtPiece_Random.slug}</h2>
         <Link href={`/`} >Pieces</Link>
         <Image src={ArtPiece_Random.imageSource} alt={`Cover image of ${ArtPiece_Random.name}`} width={ArtPiece_Random.dimensions.width} height={ArtPiece_Random.dimensions.height} priority={true} />
         <i>Artist :{ArtPiece_Random.artist}</i>
         </strong>

      <button type="button" onClick={handelrandomclick}>Random Art Piece</button>
    </div>
  );
}
