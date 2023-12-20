import { useState, useEffect } from "react";
import "./compstyles/Card.css";

function Card({ selectthiscard, increasescore, gameover }) {
  const [cardImage, setCardImage] = useState(null);
  const [selected, setSelected] = useState(false)

  function selectthiscard(e) {

    if (!selected) {
    increasescore(e)
    setSelected(true)} else {
      gameover()
    }

    }

  useEffect(() => {
    let image = null;
    async function getImage() {
      image = await fetch("https://randomfox.ca/floof/").then((res) => {
        image = res.json();
        return image
      });
      const imglist = document.querySelectorAll('img')
        imglist.forEach((img) => {
          if (image["image"] === img.src) {
            getImage()
          }
        })
      setCardImage(image["image"]);
    }
    getImage();
  }, []);

  return (
    <div className="imagecontainer" onClick={selectthiscard}>
      <img src={cardImage}></img>
    </div>
  );
}

export default Card;
