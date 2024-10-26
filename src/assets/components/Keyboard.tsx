import KeyboardKey from "./KeyboardKey";
import { FiDelete } from "react-icons/fi";
import { alphabet } from "../utils/alphabet";
import { LetterState } from "../../types";

interface KeyboardProps{
  checkedKeys: LetterState[]
  onInput: (letter: string) => void
  onDelete: () => void
  onEnter: () => Promise<void>
}

const Keyboard: React.FC<KeyboardProps> = ({ checkedKeys ,onInput, onDelete, onEnter }) => {

  return (
    <div className="flex flex-col gap-2 dark:text-white ">
      <div className="flex gap-2">
        {alphabet.slice(0, 10).map((letter , i)=>(
          <KeyboardKey
            key={alphabet.indexOf(letter)}
            state={checkedKeys[alphabet.indexOf(letter)]}
            onInput={() => onInput(letter)}
            letter={letter}
          />
        ))}
      </div>
      <div className="flex gap-2">
        {alphabet.slice(10, 20).map((letter , i)=>(
          <KeyboardKey
            key={alphabet.indexOf(letter)}
            state={checkedKeys[alphabet.indexOf(letter)]}
            onInput={() => onInput(letter)}
            letter={letter}
          />
        ))}
      </div>
      <div className="flex gap-2">
        <button
          onClick={onDelete}
          className="group relative flex justify-center items-center text-xl font-bold rounded-lg h-16 flex-1 border-2 border-black dark:border-white bg-[#a4aec4] dark:bg-[#191a24]"
        >
          <FiDelete />
          <div className="group-hover:bg-black/10 group-hover:dark:bg-white/10 absolute inset-0 size-full"></div>
        </button>
        {alphabet.slice(20, 26).map((letter , i)=>(
          <KeyboardKey
            key={alphabet.indexOf(letter)}
            state={checkedKeys[alphabet.indexOf(letter)]}
            onInput={() => onInput(letter)}
            letter={letter}
          />
        ))}
        <button
          onClick={onEnter}
          className="group relative flex justify-center items-center text-xl font-bold rounded-lg h-16 flex-1 border-2 border-black dark:border-white bg-[#a4aec4] dark:bg-[#191a24]"
        >
          Enter
          <div className="group-hover:bg-black/10 group-hover:dark:bg-white/10 absolute inset-0 size-full"></div>
        </button>
      </div>
    </div>
  )
}

export default Keyboard