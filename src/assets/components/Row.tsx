interface RowProps{
  letters: string[]
}

const Row:React.FC<RowProps> = ({ letters }) => {
  return (
    <ul className="flex">
      {letters.map((letter, i)=>(
        <li
          key={i}
          className="p-2"
        >
          {letter}
        </li>
      ))}
    </ul>
  )
}

export default Row