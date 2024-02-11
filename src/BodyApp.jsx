import styled from "styled-components";
import ProductsList from "./ProductsList";

function BodyApp() {
  return (
    <Body>
      <h1>QUAL SERÁ A PEDIDA DE HOJE ?</h1>
      <ProductsList />
    </Body>
  );
}

const Body = styled.body`
  padding-top: 6em;
  /* background-color: darkgray; */

  h1 {
    background-color: lightgray;
    font-family: "Shantell Sans", cursive;
    width: 90%;
    border-radius: 5px;
    text-align: center;
    font-size: 1.1em;
    font-weight: bold;
    margin: 1em;
    padding: 0.5em;
  }
`;

export default BodyApp;
