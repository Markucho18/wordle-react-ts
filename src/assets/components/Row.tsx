//import { useEffect } from "react"
import Cell from "./Cell"

interface RowProps{
  word: string
  letters: string[]
}

const Row:React.FC<RowProps> = ({ word, letters }) => {

  return (
    <ul className="flex gap-2">
      {letters.map((letter, i)=>(
          <Cell
            key={i}
            word={word}
            index={i}
            letter={letter.toUpperCase()}
          />
          ))
      }
    </ul>
  )
}

export default Row