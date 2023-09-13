import Spotlight from "../../components/Spotlight";
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
width: 100%; 
bottom: 0;
`;

export default function SpotlightPage({
    pieces,
    onToggleFavorite,
    artPiecesInfo,
}) {
    return (
        <Content>
            <Main>
                <Spotlight
                    pieces={pieces}
                    onToggleFavorite={onToggleFavorite}
                    artPiecesInfo={artPiecesInfo}
                />
            </Main>
            <Footer>Tsitsi® @SPICED Academy 2023 </Footer>
        </Content>
    );
}
