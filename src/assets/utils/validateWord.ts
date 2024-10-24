export const validateWord = (word: string[]) => {
  const wordString = word.join("").toLowerCase()
  return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordString}`)
    .then( res =>{
      const data = res.json()
      console.log("LA API retorno algo: ", data)
      return data
    })
    .catch( err =>{
      console.log("Hubo un error: ", err)
      throw err
    })
}
