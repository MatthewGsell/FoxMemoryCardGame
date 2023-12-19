import { useEffect, useState } from "react";
import Card from "./components/card";
import "./App.css";
import { PulseLoader } from "react-spinners";


function App() {


const a = crypto.randomUUID()
const b = crypto.randomUUID()
const c = crypto.randomUUID()
const d = crypto.randomUUID()
const e = crypto.randomUUID()
const f = crypto.randomUUID()
const g = crypto.randomUUID()
const h = crypto.randomUUID()
const i = crypto.randomUUID()
const j = crypto.randomUUID()
const k = crypto.randomUUID()
const l = crypto.randomUUID()
const m = crypto.randomUUID()
const n = crypto.randomUUID()



  const [score, setScore] = useState(0);
  const [cardsList, setCardsList] = useState([<Card
  increasescore={increasescore}
  gameover={gameover}
  shufflecards={shufflecards}
  key={a}
/>, <Card
  increasescore={increasescore}
  gameover={gameover}
  shufflecards={shufflecards}
  key={b}
/>, <Card
  increasescore={increasescore}
  gameover={gameover}
  shufflecards={shufflecards}
  key={c}
/>,<Card
  increasescore={increasescore}
  gameover={gameover}
  shufflecards={shufflecards}
  key={d}
/>,<Card
  increasescore={increasescore}
  gameover={gameover}
  shufflecards={shufflecards}
  key={e}
/>,<Card
  increasescore={increasescore}
  gameover={gameover}
  shufflecards={shufflecards}
  key={f}
/>, <Card
  increasescore={increasescore}
  gameover={gameover}
  shufflecards={shufflecards}
  key={g}
/>, <Card
  increasescore={increasescore}
  gameover={gameover}
  shufflecards={shufflecards}
  key={h}
/>,<Card
  increasescore={increasescore}
  gameover={gameover}
  shufflecards={shufflecards}
  key={i}
/>,<Card
  increasescore={increasescore}
  gameover={gameover}
  shufflecards={shufflecards}
  key={j}
/>, <Card
  increasescore={increasescore}
  gameover={gameover}
  shufflecards={shufflecards}
  key={k}
/>, <Card
  increasescore={increasescore}
  gameover={gameover}
  shufflecards={shufflecards}
  key={l}
/>,<Card
  increasescore={increasescore}
  gameover={gameover}
  shufflecards={shufflecards}
  key={m}
/>,<Card
  increasescore={increasescore}
  gameover={gameover}
  shufflecards={shufflecards}
  key={n}
/>])
  function increasescore() {
    const num = parseInt(document.querySelector('#score').textContent)
    setScore(num + 1)
    if (num === cardsList.length - 1) {
      youwin()
    }
    else {
      shufflecards()
    }
    
    
  }

  function playagain() {
    location.reload()
  }
  function gameover() {
    const finalscore = parseInt(document.querySelector('#score').textContent)
    const gameoverarray = [<div id="gameover"><h1>Game Over</h1><h1>Your Score {finalscore}</h1><button onClick={playagain}>Play Again?</button></div>]
    const container = document.querySelector('#cardscontainer')
    container.id = "gameovercontainer"
    
    setCardsList(gameoverarray)
  }
  function youwin() {
    const finalscore = parseInt(document.querySelector('#score').textContent)
    const gameoverarray = [<div id="gameover"><h1>You Win!</h1><h1>Achieved Max Possible Score {finalscore + 1}</h1><button onClick={playagain}>Play Again?</button></div>]
    const container = document.querySelector('#cardscontainer')
    container.id = "gameovercontainer"
    
    setCardsList(gameoverarray)
  }


  function shufflecards () {
    const rotatingcards = document.querySelectorAll('.imagecontainer')
    rotatingcards.forEach((card) => {
      card.classList.add('rotate')
    })
    setTimeout(() => {
      reveilcards()
    }, 1);
    let newarray = cardsList
    for (let i = newarray.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [newarray[i], newarray[j]] = [newarray[j], newarray[i]]; 
    } 
    setCardsList(newarray)
    
  }
  function reveilcards() {
    const cards = document.querySelectorAll('.rotate')
    cards.forEach((card) => {
      card.classList.remove('rotate')
    })
    console.log(cards)
  }
  function loadthescreen () {
    setTimeout(() => {
      const game = document.querySelector('#gamewrapper') 
      game.classList.remove('hidden')

      const preloader = document.querySelector('.preloader')
      if (preloader != null) {
      preloader.classList.remove('preloader')
      preloader.classList.add('hidden')}

    }, 3000);

  }
  loadthescreen()

  return (
    <>
    <div className="preloader"><PulseLoader/></div>
    <div id="gamewrapper" className="hidden">
      <div id="titleandscore" onClick={increasescore}><h1>Fox Memory Game</h1><p>Score: <span id="score">{score}</span></p></div>
      <p id="directions">Don't click the same image twice!</p>
      <div id="gamecontainer"><div id="cardscontainer">{cardsList}</div></div>
      </div>
    </>

  );
}

export default App;
