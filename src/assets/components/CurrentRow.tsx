//import { useEffect } from "react"
import Cell from "./Cell"

interface CurrentRowProps{
  word: string
  currentWord: string
}

const CurrentRow: React.FC<CurrentRowProps> = ({ word, currentWord }) => {

  return (
    <ul className="flex gap-2">
      {currentWord.split("").map((letter, i) => (
        <Cell
          key={i}
          word={word}
          index={i}
          letter={letter}
          check={false}
        />
      ))}
      {Array.from({length: word.length - currentWord.length}).map((_, i)=>(
        <Cell
          key={i}
          word={word}
          index={i}
          letter={""}
          check={false}
        />
      ))}
    </ul>
  )
}

export default CurrentRow