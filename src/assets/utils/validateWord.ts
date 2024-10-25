/* export const validateWord = (word: string[]) => {
  const wordString = word.join("").toLowerCase()
  return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordString}`)
    .then(res => res.json())
    .then(data =>{
      console.log("LA API retorno algo: ", data)
      return data.length > 0
    })
    .catch( err =>{
      console.log("Hubo un error: ", err)
      throw err
    })
} */

export const validateWord = async (word: string) => {
  try{
    const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
    const response = await fetch(URL)
    //if(response.status !== 200) throw new Error("Request Failed!")
    const data = await response.json()
    console.log(data[0].word)
    return data[0].word
  }
  catch(error){
    //console.log("There's an error", error)
    return false
  }
}
