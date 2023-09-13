import ArtPieces from "../../components/ArtPieces";
import styled from "styled-components";

const Main = styled.main`
min-height: 100%;
`;

const Content = styled.div`
min-height: ${() => window.innerHeight * .86 + "px"};
`;

const Footer = styled.footer`
height: 3em;
display: flex;
justify-content: center;
align-items: center;
bottom: 0;
width: 100%; 
bottom: 0;
`;

export default function Favorites(props) {


  const favorites = props.artPiecesInfo
    .filter((item) => item.isFavorite)
    .map((item) => item.slug);

  const items = props.pieces.filter((item) => favorites.includes(item.slug))


  if (!items || items.length === 0) {
    return "There is nothing to display";
  }


  return (
    <Content>
      <Main>
        <ArtPieces {...props} pieces={items} />
      </Main>
      <Footer>Tsitsi® @SPICED Academy 2023 </Footer>
    </Content>
  );
}
