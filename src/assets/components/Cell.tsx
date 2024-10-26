import { useEffect, useState } from "react"
import { checkLetter } from "../utils/checkLetter"

interface CellProps{
  word: string
  letter: string
  index: number
  check?: boolean
}

const Cell:React.FC<CellProps> = ({word, letter, index, check = true}) =>{
  
  const [letterState] = useState(check ? checkLetter(word, letter, index) : "unknown")

  const [revealAnimation, setRevealAnimation] = useState(false)
  const animationDuration = 200

  useEffect(()=>{
    if(letterState !== "unknown"){
      const revealDelay = setTimeout(()=>{
        setRevealAnimation(true)
      }, index * animationDuration)
      return(()=>{
        setRevealAnimation(false)
        clearTimeout(revealDelay)
      })
    }
  },[letterState])

  const [writeAnimation, setWriteAnimation] = useState(false)

  useEffect(()=>{
   if(letter !== ""){
    setWriteAnimation(true)
    const timeOut = setTimeout(()=>{
      setWriteAnimation(false)
      clearTimeout(timeOut)
    }, 150)
   }
  },[letter])

  return (
    <li className="relative">
      <ul
        style={{perspective: "1000px"}}
        className={`flex justify-center items-center text-3xl font-bold rounded-lg size-16 ${writeAnimation && "write-animation"}`}
      >
        <div
          style={{transformStyle: "preserve-3d"}}
          className={`relative size-full transition-all duration-${animationDuration} ${revealAnimation && "reveal-animation"}`}
        >
          <div
            style={{backfaceVisibility: "hidden"}}
            className="absolute size-full flex justify-center items-center unknown"
            >
            {letter}
          </div>
          <div
            style={{backfaceVisibility: "hidden", transform: "rotateX(180deg)"}}
            className={`absolute size-full flex justify-center items-center ${letterState}`}
          >
            {letter}
          </div>
        </div>
      </ul>
    </li>
  )
}

export default Cell