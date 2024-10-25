import Cell from "./Cell"

interface EmptyRowProps {
  word: string
}

const EmptyRow: React.FC<EmptyRowProps> = ({ word }) => {
  return (
    <ul className="flex gap-2">
      {Array.from({ length: word.length}).map((_,i)=>(
        <Cell
          key={i}
          word={word}
          index={i}
          letter=""
          check={false}
        />
      ))}
    </ul>
  )
}

export default EmptyRow