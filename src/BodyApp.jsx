import styled from "styled-components";
import ProductsList from "./ProductsList";

function BodyApp() {
  return (
    <Body>
      <h1>Qual será a pedida de hoje?</h1>
      <ProductsList />
    </Body>
  );
}

const Body = styled.body`
    background-color: darkgray;

    h1 {
        text-align: center;
        font-size: 1.2em;
        font-weight: bold;
        margin: 1em;
        padding: 0.5em;
    }
`

export default BodyApp;
