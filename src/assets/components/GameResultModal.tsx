import Cell from "./Cell"

type GameStatus = "playing" | "won" | "lost"

interface GameResultModalProps{
  result: GameStatus
  word: string
  previousWords: string[][]
  closeModal: () => void
}

const GameResultModal: React.FC<GameResultModalProps> = ({ result, word, previousWords, closeModal }) => {

  const resultMessages = {
    "won": "Congratulations! you've won",
    "lost": "You've lost, better luck next time!",
    "playing": ""
  }
  const resultMessage = resultMessages[result]

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
        <h2 className={`text-3xl font-bold ${result == "won" ? "text-green-400" : "text-red-500"}`}>
          {resultMessage.toUpperCase()}
        </h2>
        <div className="flex flex-col gap-2 text-white">
          {previousWords.map((prevRow, i)=>{
            return (
              <div
                key={i}
                className="flex gap-2"
              >
                {prevRow.map((prevLetter, j)=>{
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
          <p className="text-2xl font-bold py-4 text-black dark:text-white">PLAY AGAIN</p>
        </button>
      </div>
    </div>
  )
}

export default GameResultModal