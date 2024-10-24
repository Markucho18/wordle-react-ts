import { useEffect } from "react";
import { FiDelete } from "react-icons/fi";
import { validateWord } from "../utils/validateWord";

type GameStatus = "playing" | "won" | "lost"

interface KeyboardProps{
  word: string
  handleGameStatus: React.Dispatch<React.SetStateAction<GameStatus>>
  wordLength: number
  setCurrentWord: React.Dispatch<React.SetStateAction<string[]>>
  setPreviousWords: React.Dispatch<React.SetStateAction<string[][]>>
  handleModal: (n:number) => void
}

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const Keyboard: React.FC<KeyboardProps> = ({ word, handleGameStatus, wordLength, setCurrentWord, setPreviousWords, handleModal }) => {

  const checkGameResult = (curr: string[], prevWords: string[][]) => {
    const currWord = curr.join("").toLowerCase()
    console.log("Se ejecutó checkGameResult(), ", currWord, word, prevWords)
    if(currWord == word){
      console.log("La palabra es correcta")
      handleGameStatus("won")
    }
    else if(prevWords.length == 6){
      handleGameStatus("lost")
    }
  }

  const handleKeyDown = (key:string) => {
    setCurrentWord(prevCurrentWord => {
      const upperKey = key.toUpperCase()
      const newCurrentWord = [...prevCurrentWord]
      if(alphabet.includes(upperKey) && prevCurrentWord.length < wordLength){
        newCurrentWord.push(upperKey)
      }
      else if(key == "Enter"){
        if(prevCurrentWord.length == wordLength){
          validateWord(prevCurrentWord)
          .then(res => {
            if(res.length > 0){
              setPreviousWords(prevPreviousWords =>{
                const newPreviousWords = [...prevPreviousWords, prevCurrentWord]
                checkGameResult(prevCurrentWord, newPreviousWords)
                return newPreviousWords
              })
              setCurrentWord([])
            }
            else{
              handleModal(2)
            }
          })
          .catch(err => console.log(err))
        }
        else{
          handleModal(1)
        }
      }
      else if(key == "Backspace"){
        newCurrentWord.pop()
      }
      return newCurrentWord
    })
  }

  useEffect(()=>{
    document.addEventListener("keydown", (e) => handleKeyDown(e.key));
    return () => {
      document.removeEventListener("keydown", (e) => handleKeyDown(e.key) )
    }
  },[])

  return (
    <div className="flex flex-col gap-2 dark:text-white ">
      <div className="flex gap-2">
        {alphabet.slice(0, 10).map((letter , i)=>(
          <button
            key={i}
            onClick={() => handleKeyDown(letter)}
            className="flex justify-center items-center text-xl hover:bg-black/20 font-bold rounded-lg size-16 border-2 border-black dark:border-white"
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        {alphabet.slice(10, 20).map((letter , i)=>(
          <button
            key={i}
            onClick={() => handleKeyDown(letter)}
            className="flex justify-center items-center text-xl hover:bg-black/20 font-bold rounded-lg size-16 border-2 border-black dark:border-white"
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => handleKeyDown("Backspace")}
          className="flex justify-center items-center text-xl hover:bg-black/20 font-bold rounded-lg h-16 flex-1 border-2 border-black dark:border-white"
        >
          <FiDelete />
        </button>
        {alphabet.slice(20, 27).map((letter , i)=>(
          <button
            key={i}
            onClick={() => handleKeyDown(letter)}
            className="flex justify-center items-center text-xl hover:bg-black/20 font-bold rounded-lg size-16 border-2 border-black dark:border-white"
          >
            {letter}
          </button>
        ))}
        <button
          onClick={() => handleKeyDown("Enter")}
          className="flex justify-center items-center text-xl hover:bg-black/20 font-bold rounded-lg h-16 flex-1 border-2 border-black dark:border-white"
        >
          Enter
        </button>
      </div>
    </div>
  )
}

export default Keyboard