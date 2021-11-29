import { useState, useContext } from "react";
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

    return (
        <div className="displayMakeup">
            <h3>Favourites</h3>
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
