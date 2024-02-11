import styled from "styled-components";

function ProductsList() {
  return (
    <List>
      <div class="item">
        <h3>HOT DOG</h3>
        <img src="https://www.perdigao.com.br/assets/_images/5f79fb9c5259bf77a8b1e9750b81e3bb4e9f093b.webp" />
      </div>
      <div class="item">
        <h3>AÇAI</h3>
        <img src="https://t3.ftcdn.net/jpg/05/36/10/80/360_F_536108026_qNX1mUf5TOJFjhAHUPsG4UiDGgBu7VsT.jpg" />
      </div>
    </List>
  );
}

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10em;

  .item {
    background-color: lightgray;
    width: 15em;
    height: 15em;
    border-radius: 1em;
    cursor: pointer;
    margin: 1em;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      font-family: "Shantell Sans", cursive;
      font-size: 2em;
      font-weight: bold;
      color: black;
      padding-bottom: 0.4em;
    }

    img {
      width: 80%;
      margin: 10px;
    }
  }
`;

export default ProductsList;
