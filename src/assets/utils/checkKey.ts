import { LetterState } from "../../types";

export const checkKey = (completedWords: string[], letter: string, gameWord: string): LetterState => {
  if(completedWords.some(word => word.includes(letter))){
    if(gameWord.includes(letter.toLowerCase())){
      for (let word of completedWords) {
        for (let i = 0; i < word.length; i++) {
          if (word[i] === letter && gameWord[i].toUpperCase() === letter) {
            return "correct";
          }
        }
      }
      return "present"
    }
    else return "absent"
  }
  else return "unknown"
}