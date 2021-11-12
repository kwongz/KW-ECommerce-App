import React, {useState} from 'react'

export const FavoriteContext = React.createContext(null)


function FavoriteStore({children}) {
        // use context logic
    const [toggleFavorite, setToggleFavorite] = useState(true);
    const [favoriteItemsArray, setFavoriteItemsArray] = useState([])

        const handleAddRemoveFavorite = (individualMakeup) => {
        // check if the makeup is already in the favorite array
        if(favoriteItemsArray.filter(el => el === individualMakeup).length){
            individualMakeup.favorite = false
            // remove it from favorite array and set the button style back to normal
            const removedFavItemArray = favoriteItemsArray.filter(el => el !== individualMakeup)
            setFavoriteItemsArray(removedFavItemArray)
        } else {
            // add individual make up to favorite array if there are no duplicates
            individualMakeup.favorite = true
            setFavoriteItemsArray([...favoriteItemsArray, individualMakeup])
        }
    }


    const favoriteStore = {
        toggleFavorite, 
        setToggleFavorite,
        favoriteItemsArray,
        setFavoriteItemsArray,
        handleAddRemoveFavorite
    }

    return <FavoriteContext.Provider value={favoriteStore}>
        {children}
    </FavoriteContext.Provider>
}

export default FavoriteStore