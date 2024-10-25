import { words } from "./words";

export const getWord = (length: number) => {
  const minWordLength = words[0][0].length
  const index = length - minWordLength
  const wordsArray = words[index];
  const randomIndex = Math.floor(Math.random() * wordsArray.length); 
  return wordsArray[randomIndex];
}

