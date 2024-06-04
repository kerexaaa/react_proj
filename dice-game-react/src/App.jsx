import StartGame from "./components/StartGame/StartGame"
import './App.css'
import { useState } from "react"
import Game from "./components/Game/Game";

const App = () => {

  const [isGameStarted, setGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setGameStarted(prev => !prev);
  }

  return (
    <div>
      {!isGameStarted && <StartGame toggle={toggleGamePlay} />}
      {isGameStarted && <Game isGameStarted={isGameStarted} />}
    </div>
  )
}

export default App