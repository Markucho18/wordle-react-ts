
const words = [
  //4 length words
  [
    "book", "desk", "lamp", "ship", "bike", "wolf", "fish", "door", "fire", 
    "tree", "snow", "wind", "rock", "milk", "hand", "moon", "sand", "bear", 
    "frog", "star", "rain", "coin", "rope", "gift", "home", "time", "leaf", 
    "fork", "shoe", "cake"
  ],
  //5 length words
  [
    "apple", "brick", "chair", "beach", "dance", "flame", "grape", "horse", 
    "light", "music", "peace", "quill", "stone", "water", "table", "cloud", 
    "dress", "eagle", "fruit", "glass", "heart", "knife", "lemon", "magic", 
    "night", "piano", "queen", "river", "sheep", "tiger"
  ],
  //6 length words
  [
    "animal", "bottle", "canvas", "dancer", "effort", "gadget", "hunter", 
    "island", "jungle", "kitchen", "laptop", "magnet", "nature", "orange", 
    "pencil", "quartz", "rocket", "sandal", "tiger", "unique", "vessel", 
    "wallet", "xenons", "yellow", "zodiac", "attack", "beauty", "choice", 
    "distant", "flower", "guitar"
  ],
]

export const getWord = (length: number) => {
  const minWordLength = words[0][0].length
  const index = length - minWordLength
  const wordsArray = words[index];
  const randomIndex = Math.floor(Math.random() * wordsArray.length); 
  return wordsArray[randomIndex];
}

