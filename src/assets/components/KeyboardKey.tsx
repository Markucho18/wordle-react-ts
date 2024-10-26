import { LetterState } from "../../types"

interface KeyboarKeyProps {
  state: LetterState
  letter: string
  onInput: (letter: string) => void
}

const KeyboardKey: React.FC<KeyboarKeyProps> = ({state, letter, onInput}) => {

  const colors = {
    unknown: "bg-[#a4aec4] dark:bg-[#21222e]",
    absent: "bg-[#878e9c] dark:bg-[#000]",
    present: "bg-[#f3c237]",
    correct: "bg-[#79b851]"
  }
  const colorsStyle = colors[state]

  return (
    <button
      onClick={() => onInput(letter)}
      className={`group relative flex justify-center items-center text-xl font-bold rounded-lg size-16 border-2 border-black dark:border-white ${colorsStyle}`}
    >
      {letter}
      <div className="group-hover:bg-black/20 group-hover:dark:bg-white/20 absolute inset-0 size-full"></div>
    </button>
  )
}

export default KeyboardKey