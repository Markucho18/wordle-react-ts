import { GameStatus } from "../../types"
import { checkKey } from "../utils/checkKey"

interface GameResultModalProps{
  gameStatus: GameStatus
  word: string
  completedWords: string[]
  closeModal: () => void
}

const GameResultModal: React.FC<GameResultModalProps> = ({ gameStatus, word, completedWords, closeModal}) => {

  return (
    <div className="absolute inset-0 size-full flex justify-center items-center bg-black/20">
      <div className="flex flex-col py-16 px-10 gap-8 bg-white dark:bg-zinc-600 rounded-lg items-center">
        <h2 className={`text-3xl font-bold ${gameStatus == "won" ? "text-green-400" : "text-red-500"}`}>
          {gameStatus == "won"
            ? "Congratulations! you've won"
            : "You've lost, better luck next time!"
          }
        </h2>
        <div className="flex flex-col gap-2 text-white">
          {completedWords.map((prevRow, i)=>{
            return (
              <ul
                key={i}
                className="flex gap-2"
              >
                {prevRow.split("").map((prevLetter, j)=>{
                  return (
                    <li
                      key={j}
                      className={`
                        flex justify-center items-center text-3xl font-bold rounded-lg cell-container size-8 
                        ${checkKey(completedWords, prevLetter, word)}
                        `}
                    >
                      {prevLetter}
                    </li>
                  )
                })}
              </ul>
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