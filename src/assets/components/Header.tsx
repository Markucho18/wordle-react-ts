import React, { useState, useEffect } from "react"
import { CiDark } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";

interface HeaderProps {
  wordLength: number
  handleWordLength: (newWordLength: number) => void
  toggleTheme: () => void
}

const Header: React.FC<HeaderProps> = ({ wordLength, handleWordLength, toggleTheme }) => {

  const [newLength, setNewLength] = useState(wordLength)

  const [menuDisplay, setMenuDisplay] = useState(false)
  const toggleMenuDisplay = () => setMenuDisplay(prev => !prev)

  useEffect(()=>{
    if(wordLength !== newLength){
      handleWordLength(newLength)
      toggleMenuDisplay()
    }
  },[newLength])

  return (
    <header className="flex w-full bg-slate-400 dark:bg-zinc-800 text-white p-4 items-center justify-between gap-2">
      <h1 className="ml-auto mr-auto pl-28 text-3xl font-bold">WORDLE CLONE</h1>
      <div className="flex gap-4">
        <button
          className="hover:bg-black/20 dark:hover:bg-white/20 border-2 border-white rounded-lg"
          onClick={toggleTheme}
        >
          <CiDark className="size-10"/>
        </button>
        <div className="relative">
          <button
            className="hover:bg-black/20 dark:hover:bg-white/20 size-full border-2 border-white rounded-lg"
            onClick={toggleMenuDisplay}
          >
            <CiSettings className="size-10"/>
          </button>
          {menuDisplay && (
            <div
              style={{boxShadow: "0px 0px 3px black"}}
              className="absolute right-4 top-16 -mt-1 flex flex-col gap-2 bg-slate-400 dark:bg-zinc-800 rounded-md p-4"
            >
              <h1>Word Length:</h1>
              <div className="flex gap-2">
                <button
                  className={`rounded-md hover:bg-green-700 text-white size-8 ${newLength == 4 ? "bg-green-700" : "bg-green-600"}`}
                  onClick={() => setNewLength(4)}
                  >
                  4
                </button>
                <button
                  className={`rounded-md hover:bg-green-700 text-white size-8 ${newLength == 5 ? "bg-green-700" : "bg-green-600"}`}
                  onClick={() => setNewLength(5)}
                  >
                  5
                </button>
                <button
                  className={`rounded-md hover:bg-green-700 text-white size-8 ${newLength == 6 ? "bg-green-700" : "bg-green-600"}`}
                  onClick={() => setNewLength(6)}
                >
                  6
                </button>
              </div>
            </div>
          )}
          </div>
      </div>
    </header>
  )
}

export default Header