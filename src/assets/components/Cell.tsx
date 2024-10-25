import { useEffect, useState } from "react"
import { checkLetter } from "../utils/checkLetter"

interface CellProps{
  word: string
  letter: string
  index: number
  size?: number
  check?: boolean
}

const Cell:React.FC<CellProps> = ({word, letter, index, size = 16, check = true}) =>{
  
  const [letterState, setLetterState] = useState(check ? checkLetter(word, letter, index) : "unknown")

  const [revealAnimation, setRevealAnimation] = useState(false)

  useEffect(()=>{
    if(letterState !== "unknown"){
      setRevealAnimation(true)
      /* const timeOut = setTimeout(()=>{
        setRevealAnimation(false)
        clearTimeout(timeOut)
      }, 300) */
    }
    console.log("Se actualizo el estado de la letra en Cell: ", letterState)
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
        className={`
          flex justify-center items-center text-3xl font-bold rounded-lg cell-container
          size-${size} ${writeAnimation && "write-animation"}
        `}
      >
        <div
          style={{transformStyle: "preserve-3d"}}
          className={`relative size-full transition-all duration-300 ${revealAnimation && "reveal-animation"}`}
        >
          <div
            className={`absolute size-full flex justify-center items-center unknown`}
            //className="absolute size-full flex justify-center items-center"
            >
            {letter}
          </div>
          <div
            style={{transform: "rotateX(0deg)"}}
            className={`absolute size-full flex justify-center items-center ${letterState}`}
          >
            {letter}
          </div>
        </div>
      </ul>
    </li>
  )
}

{/* <li
  className={`
    flex justify-center items-center text-3xl font-bold rounded-lg 
    size-${size} ${colorStyles} ${animation && "write-animation"}

  `}
>
  {letter.toUpperCase()}
</li> */}
export default Cell