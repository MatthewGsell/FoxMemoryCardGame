import { useState, useEffect } from "react";
import "./compstyles/Card.css";

function Card({ selectedCard, setSelectedCard, gameover }) {
  const [cardImage, setCardImage] = useState(null);

  function selectthiscard(event) {
    if (selectedCard != cardImage) {
      setSelectedCard(cardImage);
    } else {
      gameover();
    }
  }

  useEffect(() => {
    let image = null;
    async function getImage() {
      image = await fetch("https://randomfox.ca/floof/").then((res) => {
        return res.json();
      });
      console.log(image["image"]);
      setCardImage(image["image"]);
    }
    getImage();
  }, []);

  return (
    <div className="imagecontainer" onClick={selectedCard}>
      <img src={cardImage}></img>
    </div>
  );
}

export default Card;
