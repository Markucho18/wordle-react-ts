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

  const [previousWords, setPreviousWords] = useState<string[][]>([])

  const [currentWord, setCurrentWord] = useState<string[]>([])

  const restartGame = () => {
    setGameStatus("notPlaying")
    setWord(getWord(wordLength))
  }

  console.log(word)

  const toggleTheme = () => {
    let htmlElement = document.documentElement
    htmlElement.classList.toggle("dark")
  }

  return (
    <div className="w-full h-screen flex flex-col items-center gap-12 dark:bg-zinc-600 select-none">
      <Header
        wordLength={wordLength}
        handleLength={setWordLength}
        toggleTheme={toggleTheme}
      />
      <Board
        previousWords={previousWords}
        currentWord={currentWord}
        word={word}
      />
      <Keyboard
        wordLength={wordLength}
        setCurrentWord={setCurrentWord}
        setPreviousWords={setPreviousWords}
      />
    </div>
  )
}

export default App
