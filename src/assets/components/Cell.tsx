//import { useEffect } from "react"
import { checkLetter } from "../utils/checkLetter"

interface CellProps{
  word: string
  letter: string
  index: number
  size?: number
  check?: boolean
}

const Cell:React.FC<CellProps> = ({word, letter, index, size = 16, check = true}) => {

  const letterState = check ? checkLetter(word, letter, index) : 0

  const colors = [
    "bg-[#a4aec4] dark:bg-[#191a24]",
    "bg-[#f3c237]",
    "bg-[#79b851]"
  ]
  const colorStyles = colors[letterState]

  return (
    <li
      /* style={{backgroundColor: colors[0]}} */
      className={`flex justify-center items-center text-3xl font-bold rounded-lg size-${size} ${colorStyles}`}
    >
      {letter.toUpperCase()}
    </li>
  )
}

export default Cell