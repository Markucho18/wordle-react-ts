export const checkLetter = (gameWord: string, letter: string, index: number) => {
  const word = gameWord.toUpperCase()
  if(word.includes(letter) && letter != ""){
    if(word[index] == letter) return 2
    else return 1
  }
  else return 0
}