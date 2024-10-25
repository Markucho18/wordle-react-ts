import { useEffect } from "react"

export const useWindow = (eventName: keyof WindowEventMap, callBack: any) => {
  useEffect(()=>{
    window.addEventListener(eventName, callBack)
    return(()=>{
      window.removeEventListener(eventName, callBack)
    })
  })
}


