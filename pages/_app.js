import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import useSWR, { SWRConfig } from "swr";
import { useEffect, useState } from "react";
import { useImmer } from "use-immer";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
  const url = "https://example-apis.vercel.app/api/art";

  const { data, error, isLoading } = useSWR(url, fetcher);

  const [artPiecesInfo, updateArtPiecesInfo] = useImmer([]);

  if (error) return "An error has occurred.";
  if (isLoading) return "Loading...";

  function onToggleFavorite(slug) {
    updateArtPiecesInfo((draft) => {
      const piece = draft.find((piece) => piece.slug === slug);

      if (piece) {
        piece.isFavorite = !piece.isFavorite;
        return;
      }

      draft.push({ slug, isFavorite: true });
    });
  }
  return (
    <>
      <GlobalStyle />
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <Layout>
          <Component
            {...pageProps}
            pieces={data}
            artPiecesInfo={artPiecesInfo}
            onToggleFavorite={onToggleFavorite}
          />
        </Layout>
      </SWRConfig>
    </>
  );
}
