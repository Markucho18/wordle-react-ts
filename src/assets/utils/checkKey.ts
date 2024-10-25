export const checkKey = (completedWords: string[], letter: string, gameWord: string) => {
  //console.log("checkKey(): ", letter, completedWords.some(word => word.includes(letter) && gameWord.includes(letter.toLowerCase())))
  if(
    completedWords.some(word => word.includes(letter)) &&
    gameWord.includes(letter.toLowerCase())
  ){
    for (let word of completedWords) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] === letter && gameWord[i].toUpperCase() === letter) {
          return "correct";
        }
      }
    }
    return "present"
  }
  return "absent"
}