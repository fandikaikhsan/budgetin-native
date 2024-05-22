import React, { createContext, useContext, useState, ReactNode } from "react"

interface PopupContextType {
  clickedBar: ClickedBar | null
  setClickedBar: React.Dispatch<React.SetStateAction<ClickedBar | null>>
  handleOutsideClick: () => void
}
const PopupContext = createContext<PopupContextType | undefined>(undefined)

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const [clickedBar, setClickedBar] = useState<ClickedBar | null>(null)

  const handleOutsideClick = () => {
    setClickedBar(null)
  }

  //   return (
  //     <PopupContext.Provider
  //       value={{ clickedBar, setClickedBar, handleOutsideClick }}
  //     >
  //       {children}
  //     </PopupContext.Provider>
  //   )
}

export const usePopup = () => {
  const context = useContext(PopupContext)
  if (context === undefined) {
    throw new Error("usePopup must be used within a PopupProvider")
  }
  return context
}

interface ClickedBar {
  index: number
  progress: number
  x: number
}
