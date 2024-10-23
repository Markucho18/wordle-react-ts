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

  const colors = [
    "#3d4054",
    "#f3c237",
    "#79b851",
  ]

  const letterState = checkLetter(word, letter, index)

  return (
    <li
      style={{backgroundColor: check ? colors[letterState] : colors[0]}}
      className={"flex justify-center items-center text-3xl font-bold rounded-lg" + ` size-${size}`}
    >
      {letter.toUpperCase()}
    </li>
  )
}

export default Cell