 import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import useSWR , { SWRConfig }from "swr";
import { useRouter } from "next/router.js";

  const fetcher = (url) => fetch(url).then((res) => res.json());



export default function App({ Component, pageProps }) {
  const url = "https://example-apis.vercel.app/api/art";
const { data, error, isLoading } = useSWR(url, fetcher);
if (error) return "An error has occurred.";
if (isLoading) return "Loading...";
  return (
    <>
      <GlobalStyle />
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <Layout>
          <Component {...pageProps} pieces={data} />

        </Layout>
      </SWRConfig>
    </>
  );
}
