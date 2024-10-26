import { useState, useEffect } from "react"
import Header from "./assets/components/Header"
import Board from "./assets/components/Board"
import Keyboard from "./assets/components/Keyboard"
import WarningModal from "./assets/components/WarningModal"
import GameResultModal from "./assets/components/GameResultModal"
import { getWord } from "./assets/utils/getWord"
import { GameStatus, LetterState } from "./types"
import { useWindow } from "./assets/utils/useWindow"
import { validateWord } from "./assets/utils/validateWord"
import { alphabet } from "./assets/utils/alphabet"
import { checkKey } from "./assets/utils/checkKey"

const App: React.FC = () =>{

  const [gameStatus, setGameStatus] = useState<GameStatus>("playing")
  
  const [wordLength, setWordLength] = useState(5)
  const handleWordLength = (newWordLength: number) => {
    const answer = confirm("Are you sure to change the word length, it'll restart the game")
    if(answer){
      setWordLength(newWordLength)
      restartGame(newWordLength)
    }
  }

  const [word, setWord] = useState(getWord(wordLength))

  const [turn, setTurn] = useState(1)

  const [currentWord, setCurrentWord] = useState<string>("")

  const [completedWords, setCompletedWords] = useState<string[]>([])

  const handleLetter = (letter: string) => {
    if(currentWord.length < wordLength){
      setCurrentWord(prev => prev + letter)
    }
  }

  const handleDelete = () => {
    setCurrentWord(prev => prev.slice(0, - 1))
  }

  const [warningModal, setWarningModal] = useState(0)

  const handleEnter = async () => {
    if(currentWord.length == wordLength){
      const isValid = await validateWord(currentWord)
      if(isValid){
        const newCompletedWords = [...completedWords, currentWord]
        setCompletedWords(newCompletedWords)
        setTurn(prev => prev + 1)
        if(currentWord.toLowerCase() == word){
          setGameStatus("won")
        }
        else if(newCompletedWords.length == 6){
          setGameStatus("lost")
        }
        setCurrentWord("")
      }
      else setWarningModal(2)
    }
    else setWarningModal(1)
  }

  const [gameResultModal, setGameResultModal] = useState(false)
  const closeGameResultModal = () =>{
    restartGame()
    setGameResultModal(false)
  }

  const handleKeyDown = async (e: KeyboardEvent) => {
    if(gameResultModal == false){
      const letter = e.key.toUpperCase()
      if(alphabet.includes(letter)){
        handleLetter(letter)
      }
      else if(e.key == "Backspace"){
        handleDelete()
      }
      else if(e.key == "Enter"){
        await handleEnter()
      }
    }
  }

  useWindow("keydown", handleKeyDown)

  const restartGame = (newLength?: number) => {
    setCurrentWord("")
    setCompletedWords([])
    setTurn(1)
    setWord(getWord(newLength ? newLength : wordLength))
    setGameStatus("playing")
  }

  useEffect(()=>{
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

  useEffect(()=>{
    console.log("word: ", word)
  },[word])

  const toggleTheme = () => {
    let htmlElement = document.documentElement
    htmlElement.classList.toggle("dark")
  }

  const [checkedKeys, setCheckedKeys] = useState<LetterState[]>([])

  useEffect(()=>{
    const newCheckedKeys = alphabet.map((letter) =>{
      return checkKey(completedWords, letter, word)
    })
    setCheckedKeys(newCheckedKeys)
  },[completedWords])

  return (
    <div className="relative w-full h-screen flex flex-col items-center gap-12 bg-zinc-200 dark:bg-zinc-600 select-none">
      <Header
        wordLength={wordLength}
        handleWordLength={handleWordLength}
        toggleTheme={toggleTheme}
      />
      <Board
        word={word}
        turn={turn}
        currentWord={currentWord}
        completedWords={completedWords}
      />
      <Keyboard
        checkedKeys={checkedKeys}
        onInput={handleLetter}
        onDelete={handleDelete}
        onEnter={handleEnter}
      />
      {warningModal !== 0 && 
        <WarningModal 
          state={warningModal}
        />
      }
      {gameResultModal && 
        <GameResultModal
          gameStatus={gameStatus}
          word={word}
          completedWords={completedWords}
          closeModal={closeGameResultModal}
        />
      }
    </div>
  )
}

export default App
