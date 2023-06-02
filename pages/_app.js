import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import useSWR, { SWRConfig } from "swr";
import { freeze, produce } from "immer";
import useLocalStorageState from "use-local-storage-state";
import { useCallback } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

function useImmerLocalStorageState(key, options) {
  //
  const [value, setValue] = useLocalStorageState(key, {
    ...options,
    defaultValue: freeze(options.defaultValue),
  });

  return [
    value,
    useCallback(
      (updater) => {
        if (typeof updater === "function") setValue(produce(updater));
        else setValue(freeze(updater));
      },
      [setValue]
    ),
  ];
}

export default function App({ Component, pageProps }) {
  const url = "https://example-apis.vercel.app/api/art";

  const { data, error, isLoading } = useSWR(url, fetcher);

  const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    { defaultValue: [] }
  );

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

  function onSubmitComment(slug, context) {
    updateArtPiecesInfo((draft) => {
      const piece = draft.find((piece) => piece.slug === slug);

      if (piece) {
        if (!piece.comments) {
          piece.comments = [];
        }
        piece.comments.push(context);
        return;
      }
      draft.push({ slug, comments: [context] });
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
            onSubmitComment={onSubmitComment}
          />
        </Layout>
      </SWRConfig>
    </>
  );
}
