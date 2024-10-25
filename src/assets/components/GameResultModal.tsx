import { GameStatus } from "../../types"
import Cell from "./Cell"

interface GameResultModalProps{
  gameStatus: GameStatus
  word: string
  completedWords: string[]
  closeModal: () => void
}

const GameResultModal: React.FC<GameResultModalProps> = ({ gameStatus, word, completedWords, closeModal}) => {

/*   const {gameStatus, word, previousWords} = useWordsContext() */

  return (
    <div className="absolute inset-0 size-full flex justify-center items-center bg-black/20">
      <div className="flex flex-col py-16 px-10 gap-8 bg-white dark:bg-zinc-600 rounded-lg items-center">
        {/* <button
          className="absolute right-2 top-2 text-black hover:text-zinc-500 dark:text-zinc-200 dark:hover:text-white"
          onClick={closeModal}
        >
          <IoCloseSharp 
            className="size-8"
          />
        </button> */}
        <h2 className={`text-3xl font-bold ${gameStatus == "won" ? "text-green-400" : "text-red-500"}`}>
          {gameStatus == "won"
            ? "Congratulations! you've won"
            : "You've lost, better luck next time!"
          }
        </h2>
        <div className="flex flex-col gap-2 text-white">
          {completedWords.map((prevRow, i)=>{
            return (
              <div
                key={i}
                className="flex gap-2"
              >
                {prevRow.split("").map((prevLetter, j)=>{
                  return (
                    <Cell
                    key={j}
                    word={word} 
                    index={j}
                    letter={prevLetter}
                    size={8}
                  />
                  )
                })}
            </div>
            )
          })}
        </div>
        <p className="text-xl text-black dark:text-white">The word was: {word.toUpperCase()}</p>
          <button
            onClick={closeModal}
            className="bg-green-400 rounded-lg w-2/3 hover:bg-green-500 hover:-translate-y-1 transition duration-150 ease-in-out"
          >
          <p className="text-2xl font-bold py-4 text-white">PLAY AGAIN</p>
        </button>
      </div>
    </div>
  )
}

export default GameResultModal