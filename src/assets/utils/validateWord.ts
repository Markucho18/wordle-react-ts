export const validateWord = async (word: string) => {
  try{
    const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
    const response = await fetch(URL)
    const data = await response.json()
    return data[0].word
  }
  catch(error){
    return false
  }
}
