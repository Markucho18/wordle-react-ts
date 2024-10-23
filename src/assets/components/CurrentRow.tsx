//import { useEffect } from "react"
import Cell from "./Cell"

interface CurrentRowProps{
  word: string
  currentWord: string[]
}

const CurrentRow: React.FC<CurrentRowProps> = ({ word, currentWord }) => {

  return (
    <ul className="flex gap-2">
      {Array.from({length: word.length}).map((_, i)=>{
        if(currentWord[i]) return (
          <Cell
            key={i}
            word={word}
            index={i}
            letter={currentWord[i].toUpperCase()}
            check={false}
          />
        )
        return (
          <Cell
            key={i}
            word={word}
            index={i}
            letter={""}
          />
        )
      })}
    </ul>
  )
}

export default CurrentRow