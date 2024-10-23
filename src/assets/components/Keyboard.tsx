import { useState, useEffect } from "react";
import { FiDelete } from "react-icons/fi";

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

const Keyboard: React.FC = () => {

  const handleKeyDown = (e:KeyboardEvent) => {
    const key = e.key
    if(alphabet.includes(key.toUpperCase()) || key == "Backspace" || key == "Enter"){
      console.log(key)
    }
  }

  useEffect(()=>{
    document.addEventListener("keydown", (e) => handleKeyDown(e))
  },[])

  return (
    <div className="dark:text-white">
      <div className="flex">
        {alphabet.slice(0, 10).map((letter , i)=>(
          <div
            key={i}
          >
            {letter}
          </div>
        ))}
      </div>
      <div className="flex">
        {alphabet.slice(10, 20).map((letter , i)=>(
          <div
            key={i}
          >
            {letter}
          </div>
        ))}
      </div>
      <div className="flex">
        <div>
          <FiDelete />
        </div>
        {alphabet.slice(20, 27).map((letter , i)=>(
          <div
            key={i}
          >
            {letter}
          </div>
        ))}
        <div>
          Enter
        </div>
      </div>
    </div>
  )
}

export default Keyboard