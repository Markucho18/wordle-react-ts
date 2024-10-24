import Row from "./Row"
import CurrentRow from "./CurrentRow"
import { useWordsContext } from "../contexts/WordsContext"

interface BoardProps{
}

const Board: React.FC<BoardProps> = () => {

  const {previousWords, currentWord, word} = useWordsContext()

  const emptyArray: string[] = []
  for(let i = 0; i < word.length; i++) emptyArray.push("")

  return (
    <div className="flex flex-col gap-2 text-white gap">
      {Array.from({length: 6}).map((_, i)=>{
        if(i == previousWords.length) return (
          <CurrentRow
            key={i}
            word={word}
            currentWord={currentWord}
          />
        )
        return (
          <Row
            key={i}
            word={word}
            letters={previousWords[i] ? previousWords[i] : emptyArray}
          />
        )
      })}
    </div>
  )
}

export default Board