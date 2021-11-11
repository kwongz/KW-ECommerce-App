import React, {useState} from 'react'

export const FavoriteContext = React.createContext(null)


export default ({children}) => {
        // use context logic
    const [toggleFavorite, setToggleFavorite] = useState(false);

    const favoriteStore = {
        toggleFavorite, 
        setToggleFavorite
    }

    return <FavoriteContext.Provider value={favoriteStore}>
        {children}
    </FavoriteContext.Provider>
}
