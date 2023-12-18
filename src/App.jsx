import { useState } from "react";
import Card from "./components/card";
import "./App.css";

function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  function gameover() {}

  return (
    <>
      <div id="cardscontainer">
        <Card
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          gameover={gameover}
        />
        <Card
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          gameover={gameover}
        />
        <Card
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          gameover={gameover}
        />
        <Card
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          gameover={gameover}
        />
        <Card
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          gameover={gameover}
        />
        <Card
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          gameover={gameover}
        />
        <Card
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          gameover={gameover}
        />
        <Card
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          gameover={gameover}
        />
      </div>
    </>
  );
}

export default App;
