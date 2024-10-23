import { useState } from "react"
import Header from "./assets/components/Header"
import Board from "./assets/components/Board"
import Keyboard from "./assets/components/Keyboard"
import { getWord } from "./assets/utils/getWord"

type GameStatus = "notPlaying" | "playing" | "won" | "lost"

const App: React.FC = () =>{

  const [gameStatus, setGameStatus] = useState<GameStatus>("notPlaying")
  
  const [wordLength, setWordLength] = useState(5)

  const [word, setWord] = useState(getWord(wordLength))

  const [currentWord, setCurrentWord] = useState([])

  const restartGame = () => {
    setGameStatus("notPlaying")
    setWord(getWord(wordLength))
  }

  const toggleTheme = () => {
    let htmlElement = document.documentElement
    htmlElement.classList.toggle("dark")
  }

  return (
    <div className="w-full h-screen flex flex-col dark:bg-zinc-600">
      <Header
        wordLength={wordLength}
        handleLength={setWordLength}
        toggleTheme={toggleTheme}
      />
      <Board
        word={word}
        wordLength={wordLength}
      />
      <Keyboard />
    </div>
  )
}

export default App
