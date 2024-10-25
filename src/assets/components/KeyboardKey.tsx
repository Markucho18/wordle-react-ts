import { useEffect } from "react"
import { KeyboardKeyState } from "../../types"

interface KeyboarKeyProps {
  state: KeyboardKeyState
  letter: string
  onInput: (letter: string) => void
}

const KeyboardKey: React.FC<KeyboarKeyProps> = ({state, letter, onInput}) => {

  const colors = {
    absent: "bg-[#a4aec4] dark:bg-[#191a24]",
    present: "bg-[#f3c237]",
    correct: "bg-[#79b851]"
  }
  const colorsStyle = colors[state]

  useEffect(()=>{

  })

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