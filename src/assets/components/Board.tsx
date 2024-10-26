import Row from "./Row"
import CurrentRow from "./CurrentRow"
import EmptyRow from "./EmptyRow"

interface BoardProps{
  word: string
  turn: number
  currentWord: string
  completedWords: string[]
}

const Board: React.FC<BoardProps> = ({ word, turn, currentWord, completedWords}) => {

  return (
    <div className="flex flex-col gap-2 text-white gap">
      {completedWords.map((completedWord, i)=>(
        <Row
          key={i}
          word={word}
          currentWord={completedWord}
        />
      ))}
      {Array.from({length: 7 - turn}).map((_, i)=>(
        i === 0 ? (
          <CurrentRow
            key={i}
            word={word}
            currentWord={currentWord}
          />
        )
        : (
          <EmptyRow
            key={i}
            word={word}
          />
        )
      ))}
    </div>
  )
}

export default Board