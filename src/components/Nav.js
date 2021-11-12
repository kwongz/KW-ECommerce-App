import Modal from "./Modal";
import { useState, useEffect, useContext } from "react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {FavoriteContext} from '../utils/favoriteStore'


function Nav({ navProductType, totalCartItems}) {
    const [callModal, setCallModal] = useState(false);
    const [totalCartQuantity, setTotalCartQuantity] = useState();

    // useContext Logic
    const {toggleFavorite, setToggleFavorite, favoriteItemsArray} = useContext(FavoriteContext)

    useEffect(() => {
        setTotalCartQuantity(totalCartItems)
    }, [totalCartItems]);

    const handleOnClick = (e) => {
        navProductType(e.target.innerText.toLowerCase())
        setToggleFavorite(true)
    }

    return (
        <>
            <nav>
                <div className="navBelt">
                    <div className="wrapper">
                        <p>Nabila</p>
                        <ul>
                            <li className="navHeart"
                                onClick={() => setToggleFavorite(!toggleFavorite)}>
                                <FontAwesomeIcon icon={faHeart} />
                                {
                                    favoriteItemsArray.length  ?
                                    <span className="navHeartQuantity">
                                        {favoriteItemsArray.length}
                                    </span>
                                    :null
                                }
                            </li>
                            <li 
                                className="cart"
                                onClick={() => setCallModal(true)}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                                {
                                    totalCartQuantity?
                                    <span className="cartQuantity">
                                        {totalCartQuantity}
                                    </span>
                                    :null
                                }
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="banner"></div>
                <div className="navMain">
                    <ul className="navigation">
                        <li onClick={handleOnClick}>Foundation</li>
                        <li onClick={handleOnClick}>Blush</li>
                        <li onClick={handleOnClick}>Lipstick</li>
                    </ul>
                </div>
            </nav>

            {
                callModal?
                    <Modal
                        onClose={() => setCallModal(false)}
                        forComponent="cart"
                        info= ""
                        checkCartQuantity={(cartQuantity) => setTotalCartQuantity(cartQuantity)}
                    />
                    : null
            }
        </>
    )
}

export default Nav
