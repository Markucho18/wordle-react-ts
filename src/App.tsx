import { useState, useEffect } from "react"
import Header from "./assets/components/Header"
import Board from "./assets/components/Board"
import Keyboard from "./assets/components/Keyboard"
import WarningModal from "./assets/components/WarningModal"
import GameResultModal from "./assets/components/gameResultModal"
import { getWord } from "./assets/utils/getWord"

type GameStatus = "playing" | "won" | "lost"

const App: React.FC = () =>{

  const [gameStatus, setGameStatus] = useState<GameStatus>("playing")
  
  const [wordLength, setWordLength] = useState(5)

  const [word, setWord] = useState(getWord(wordLength))

  const [previousWords, setPreviousWords] = useState<string[][]>([])

  const [currentWord, setCurrentWord] = useState<string[]>([])

  const [warningModal, setWarningModal] = useState(0)
  const handleWarningModal = (n: number) => setWarningModal(n)

  const restartGame = () => {
    setCurrentWord([])
    setPreviousWords([])
    setWord(getWord(wordLength))
    setGameStatus("playing")
  }

  const [gameResultModal, setGameResultModal] = useState(false)
  const closeGameResultModal = () =>{
    restartGame()
    setGameResultModal(false)
  }

  useEffect(()=>{
    console.log("El gamestatus cambió ", gameStatus)
    if(gameStatus == "won" || gameStatus == "lost"){
      setGameResultModal(true)
    }
  },[gameStatus])

  useEffect(()=>{
    if(warningModal !== 0){
      const autoCloseDelay = setTimeout(()=>{
        setWarningModal(0)
      }, 2000)
      return () => {
        clearTimeout(autoCloseDelay)
      }
    }
  },[warningModal])

  console.log(word)

  const toggleTheme = () => {
    let htmlElement = document.documentElement
    htmlElement.classList.toggle("dark")
  }

  return (
    <div className="relative w-full h-screen flex flex-col items-center gap-12 dark:bg-zinc-600 select-none">
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
        word={word}
        handleGameStatus={setGameStatus}
        wordLength={wordLength}
        setCurrentWord={setCurrentWord}
        setPreviousWords={setPreviousWords}
        handleModal={handleWarningModal}
      />
      {warningModal !== 0 && (
        <WarningModal 
          state={warningModal}
        />
      )}
      {gameResultModal && (
        <GameResultModal
          result={gameStatus}
          word={word}
          previousWords={previousWords}
          closeModal={closeGameResultModal}
        />
      )}
    </div>
  )
}

export default App
