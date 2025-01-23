import React, { createContext, useState } from 'react'


export const FavoritesContext =  createContext()
const FavoritesProvider = ({children}) => {
    const [bag, setBag] = useState([])

    const toggleFavorites = async(fav) => {
       const idx  = bag.findIndex((q) => q._id === fav._id)
       if (idx === -1) {
          setBag([...bag , fav])
       }else{
        setBag([...bag].filter((q) => q._id !== fav._id))
       }
    }
  return (
    <div>
      <FavoritesContext.Provider value={{bag, toggleFavorites}}>{children}</FavoritesContext.Provider>
    </div>
  )
}

export default FavoritesProvider
