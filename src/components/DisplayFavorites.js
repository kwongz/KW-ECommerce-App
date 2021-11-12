import { useEffect, useState, useContext } from "react";
import Modal from "./Modal";
import {FavoriteContext} from '../utils/favoriteStore'
import MakeUpCard from "./MakeUpCard";

function DisplayFavorites({ checkCartQuantity }) {
    // Potential problem for future renders
    const [callModal, setCallModal] = useState(false);
    const [makeupInfo, setMakeupInfo] = useState({});

    const {favoriteItemsArray, handleAddRemoveFavorite} = useContext(FavoriteContext)

    const handleModalInfo = (quickLookInfo) => {
        setMakeupInfo(quickLookInfo);
        setCallModal(true);
    }

    const roundPrice = (price) => {
        return (Math.round(price * 100) / 100).toFixed(2)
    }

    // const handleAddRemoveFavorite = (individualMakeup) => {
    //     // check if the makeup is already in the favorite array
    //     if(favoriteItemsArray.filter(el => el === individualMakeup).length){
    //         // remove it from favorite array and set the button style back to normal
    //         const removedFavItemArray = favoriteItemsArray.filter(el => el !== individualMakeup)
    //         setFavoriteItemsArray(removedFavItemArray)
    //     } else {
    //         // add individual make up to favorite array if there are no duplicates
    //         setFavoriteItemsArray([...favoriteItemsArray, individualMakeup])
    //     }
    // }


    return (
        <div className="displayMakeup">
            <ul className="allMakeupContainer">
                { favoriteItemsArray.map((individualMakeup) => {
                    return (
                        <MakeUpCard 
                            individualMakeup={individualMakeup} 
                            handleModalInfo={handleModalInfo}
                            roundPrice={roundPrice}
                            handleAddRemoveFavorite={handleAddRemoveFavorite}
                        />
                    )
                })}
            </ul>

            {
                callModal ?
                <Modal
                    onClose={() => setCallModal(false)}
                    info={makeupInfo}
                    forComponent="quicklook"
                    checkCartQuantity={(cartQuantity) => checkCartQuantity(cartQuantity)}
                />
                : null
            }
        </div>
    )
}

export default DisplayFavorites
