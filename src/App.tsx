import { useState, useEffect } from "react"
import Header from "./assets/components/Header"
import Board from "./assets/components/Board"
import Keyboard from "./assets/components/Keyboard"
import WarningModal from "./assets/components/WarningModal"
import GameResultModal from "./assets/components/GameResultModal"
import { getWord } from "./assets/utils/getWord"
import { useWordsContext } from "./assets/contexts/WordsContext"

const App: React.FC = () =>{

  const {
    gameStatus, setGameStatus,
    wordLength,
    word, setWord,
    setPreviousWords,
    setCurrentWord
  } = useWordsContext()

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
      }, 1500)
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
        toggleTheme={toggleTheme}
      />
      <Board/>
      <Keyboard
        handleModal={handleWarningModal}
      />
      {warningModal !== 0 && (
        <WarningModal 
          state={warningModal}
        />
      )}
      {gameResultModal && (
        <GameResultModal
          closeModal={closeGameResultModal}
        />
      )}
    </div>
  )
}

export default App
