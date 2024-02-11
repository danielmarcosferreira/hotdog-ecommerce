import styled from "styled-components";

function FooterApp() {
  return (
    <Footer>
      <div className="Menu">
        <ion-icon name="home-outline"></ion-icon>
        <p>Menu</p>
      </div>
      <div className="Carrinho">
        <ion-icon name="cart-outline"></ion-icon>
        <p>Carrinho</p>
      </div>
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
  justify-content: space-between;
  align-items: center;

  div {
    background-color: darkgray;
    width: 7em;
    height: 4.5em;
    margin: 10px;
    border-radius: 15%;
    cursor: pointer;
    margin: 0 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    ion-icon {
      font-size: 30px;
    }

    p {
      font-size: 20px;
      font-family: "Shantell Sans", cursive;
    }
  }
`;

export default FooterApp;
