import { LetterState } from "../../types"

export const checkLetter = (gameWord: string, letter: string, index: number): LetterState => {
  const word = gameWord.toUpperCase()
  if(word.includes(letter) && letter != ""){
    if(word[index] == letter) return "correct"
    else return "present"
  }
  else return "absent"
}