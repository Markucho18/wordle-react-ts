import { createContext, useContext, useState } from "react"
import { getWord } from "../utils/getWord"
import { GameStatus } from "../../types"

interface WordsContextProviderProps {
  children: React.ReactNode
}

interface WordsContextType {
  gameStatus: GameStatus
  setGameStatus: React.Dispatch<React.SetStateAction<GameStatus>>
  wordLength: number
  setWordLength: React.Dispatch<React.SetStateAction<number>>
  word: string
  setWord: React.Dispatch<React.SetStateAction<string>>
  previousWords: string[][]
  setPreviousWords: React.Dispatch<React.SetStateAction<string[][]>>
  currentWord: string[]
  setCurrentWord: React.Dispatch<React.SetStateAction<string[]>>
}

const WordsContext = createContext<WordsContextType | undefined>(undefined)

export const WordsContextProvider: React.FC<WordsContextProviderProps> = ({ children }) => {

  const [gameStatus, setGameStatus] = useState<GameStatus>("playing")
  
  const [wordLength, setWordLength] = useState(5)

  const [word, setWord] = useState(getWord(wordLength))

  const [previousWords, setPreviousWords] = useState<string[][]>([])

  const [currentWord, setCurrentWord] = useState<string[]>([])

  return (
    <WordsContext.Provider
      value={{
        gameStatus, setGameStatus,
        wordLength, setWordLength,
        word, setWord,
        previousWords, setPreviousWords,
        currentWord, setCurrentWord
      }}
    >
      {children}
    </WordsContext.Provider>
  )
}

export const useWordsContext = () => {
  const context = useContext(WordsContext)
  if(!context){
    throw new Error("WordsContext must be use inside WordsContextProvider")
  }
  return context
}

