import styled from "styled-components";
import logo from "./assets/images/logo.jpeg";

function Header() {
  return (
    <Topo>
      <img src={logo} />
      <h1>Josi's Restaurant</h1>
      <p>///</p>
    </Topo>
  );
}

const Topo = styled.header`
  background-color: lightgray;
  width: 100%;
  height: 6em;
  padding: 0 1em;
  border-bottom: 1px solid black;
  position: fixed;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 4.5em;
    padding: 0.1em;
    border-radius: 50%;
  }

  h1 {
    font-family: "Shantell Sans", cursive;
    font-weight: bold;
    font-size: 1.5em;
  }

  p {
    font-weight: bolder;
    margin-right: 0.5em;
  }
`;

export default Header;
