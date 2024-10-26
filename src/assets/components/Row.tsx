import Cell from "./Cell"

interface RowProps{
  word: string
  currentWord: string
}

const Row:React.FC<RowProps> = ({ word, currentWord }) => {

  return (
    <ul className="flex gap-2">
      {currentWord.split("").map((letter, i)=>(
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