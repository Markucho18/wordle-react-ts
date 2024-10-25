import React, { useState, useEffect } from "react"
import { CiDark } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";

interface HeaderProps {
  wordLength: number
  handleWordLength: React.Dispatch<React.SetStateAction<number>>
  toggleTheme: () => void
}

const Header: React.FC<HeaderProps> = ({ wordLength, handleWordLength, toggleTheme }) => {

  const [newLength, setNewLength] = useState(wordLength)

  const [menuDisplay, setMenuDisplay] = useState(false)
  const toggleMenuDisplay = () => setMenuDisplay(prev => !prev)

  useEffect(()=>{
    if(wordLength !== newLength){
      handleWordLength(newLength)
    }
    console.log("newLength ha cambiado")
  },[newLength])

  return (
    <header className="flex w-full bg-blue-300 dark:bg-zinc-800 dark:text-white py-4 justify-center gap-2">
      <h1>WORDLE CLONE</h1>
      <button
        className=" border-2 border-white rounded-lg"
        onClick={toggleTheme}
      >
        <CiDark className="size-10"/>
      </button>
      <div className="relative">
        <button
          className="size-full border-2 border-white rounded-lg"
          onClick={toggleMenuDisplay}
        >
          <CiSettings className="size-10"/>
        </button>
        {menuDisplay && (
          <div className="absolute flex gap-2">
            <button
              className="rounded-md bg-green-600 hover:bg-green-700 text-white size-8"
             onClick={() => setNewLength(4)}
            >
              4
            </button>
            <button
              className="rounded-md bg-green-600 hover:bg-green-700 text-white size-8"
             onClick={() => setNewLength(5)}
            >
              5
            </button>
            <button
              className="rounded-md bg-green-600 hover:bg-green-700 text-white size-8"
             onClick={() => setNewLength(6)}
            >
              6
            </button>
          </div>
        )}
        </div>
    </header>
  )
}

export default Header