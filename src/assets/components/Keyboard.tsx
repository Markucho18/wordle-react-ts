import { useEffect, useState } from "react";
import { FiDelete } from "react-icons/fi";
import { validateWord } from "../utils/validateWord";
import { useWordsContext } from "../contexts/WordsContext";

interface KeyboardProps{
  handleModal: (n: number) => void
}

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const Keyboard: React.FC<KeyboardProps> = ({ handleModal }) => {

  const {
    setGameStatus, wordLength,
    word, setWord,
    previousWords, setPreviousWords,
    currentWord, setCurrentWord
  } = useWordsContext()

  const checkGameResult = () => {
    const currWord = currentWord.join("").toLowerCase()
    console.log("Se ejecutó checkGameResult(), ", currentWord, word, previousWords)
    if(currWord == word){
      console.log("La palabra es correcta")
      setGameStatus("won")
    }
    else if(previousWords.length == 6){
      setGameStatus("lost")
    }
    setCurrentWord([])
  }

  const [wordIsValid, setWordIsValid] = useState(false)

  useEffect(()=>{
    if(wordIsValid) checkGameResult()
  }, [wordIsValid])

/*   const handleLetter = (letter: string) => {
    console.log("currentWord en handleLetter: ", currentWord)
    setCurrentWord(prev => [...prev, letter])
  }
  
  const handleBackspace = () => {
    
    console.log("currentWord en handleBackspace: ", currentWord)
    setCurrentWord(prev => prev.slice(0, -1))
  }

  const handleEnter = () => {
    console.log("En handleEnter: ", currentWord, word)
    if(currentWord.length == word.length){
      validateWord(currentWord)
      .then(res =>{
        if(res.length > 0){
          setPreviousWords(prev => [...prev, currentWord])
          setWordIsValid(true)
        }
        else{
          setWordIsValid(false)
          handleModal(2)
        }
      })
      .catch(err => console.log("Hubo un error: ", err))
    }
    else{
      handleModal(1)
    }
  } */

  const handleKeyDown = (key:string) => {
    const upperKey = key.toUpperCase()
    setCurrentWord(prevCurrentWord => {
      if(alphabet.includes(upperKey) && prevCurrentWord.length < wordLength){
        return [...prevCurrentWord, key.toUpperCase()]
      }
      else if(key == "Backspace"){
        return prevCurrentWord.slice(0, -1)
      }
      else if(key == "Enter"){
        if(prevCurrentWord.length == word.length){
          validateWord(prevCurrentWord)
          .then(res =>{
            if(res.length > 0){
              setPreviousWords(prev => [...prev, currentWord])
              console.log("Se ejecutó checkGameResult(), ", prevCurrentWord, word)
              setWord(prevWord =>{
                const currWord = prevCurrentWord.join("").toLowerCase()
                if(currWord === prevWord){
                  console.log("La palabra es correcta")
                  setGameStatus("won")
                }
                else if(previousWords.length === 6){
                  setGameStatus("lost")
                }
                return prevWord
              })
              return []
            }
            else{
              handleModal(2)
            }
          })
          .catch(err => console.log("Hubo un error: ", err))
        }
        else{
          handleModal(1)
        }
      }
      return prevCurrentWord
    })
  }

 /*  const handleKeyDown = (key: string) => {
    const upperKey = key.toUpperCase()
    if(alphabet.includes(upperKey) && currentWord.length < wordLength){
      handleLetter(upperKey)
    }
    else if(key == "Backspace"){
      handleBackspace()
    }
    else if(key == "Enter"){
      handleEnter()
    }
  } */
  
  useEffect(()=>{
    document.addEventListener("keydown", (e) => handleKeyDown(e.key));
    return () => {
      document.removeEventListener("keydown", (e) => handleKeyDown(e.key) )
    }
  },[])


  useEffect(()=>{
    console.log("Word se actualizo en Keyboard.tsx: ", word)
  },[word])

  useEffect(()=>{
    console.log("currentWord: ", currentWord)
  },[currentWord])

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

    /* const handleKeyDown = (key:string) => {
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
    } */
  
    /*   useEffect(()=>{
        document.addEventListener("keydown", (e) => handleKeyDown(e.key));
        return () => {
          document.removeEventListener("keydown", (e) => handleKeyDown(e.key) )
        }
      },[]) */