interface BoardProps{
  word: string
  wordLength: number
}

const Board: React.FC<BoardProps> = ({ word, wordLength }) => {



  return (
    <div className="dark:text-white">
      {Array.from({length: 6}).map((_, i)=>(
        <div
          key={i}
          className="flex"
        >
          {Array.from({length: wordLength}).map((_, i)=>(
            <div
              key={i}
              className="flex"
            >
              {word[i]}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Board