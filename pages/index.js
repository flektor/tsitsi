import useSWR from "swr";
import ArtPieces from "../components/ArtPieces";

export default function HomePage() {
  // ...
  const url = "https://example-apis.vercel.app/api/art";

  const { data, error, isLoading } = useSWR(url);
  if (error) {
    return <div>No image found</div>;
  }

  if (isLoading) {
    return <div>Loading..</div>;
  }

  // error.info === {
  //   message: "You are not authorized to access this resource.",
  //   documentation_url: "..."
  // }
  // error.status === 403

  return (
    <div>
      <ArtPieces pieces={data} />
    </div>
  );
}
