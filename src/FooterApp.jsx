import styled from "styled-components";

function FooterApp() {
  return (
    <Footer>
      <h2>Footer App</h2>
    </Footer>
  );
}

const Footer = styled.footer`
  background-color: lightgray;
  width: 100%;
  height: 6em;
  padding: 0 1em;
  border-bottom: 1px solid black;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-family: "Shantell Sans", cursive;
    font-weight: bold;
    font-size: 1.7em;
  }
`;

export default FooterApp;
