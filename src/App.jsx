import styled from "styled-components";
import Header from "./Header";
import GlobalStyle from "./styles/GlobalStyle";
import BodyApp from "./BodyApp";
import FooterApp from "./FooterApp";

function App() {
  return (
    <ContainerApp>
      <GlobalStyle />
      <Header />
      <BodyApp />
      <FooterApp />
    </ContainerApp>
  );
}

const ContainerApp = styled.body`
background-color: gray;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`


export default App;
