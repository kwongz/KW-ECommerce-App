import Modal from "./Modal";
import { useState, useEffect } from "react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


function Nav({ navProductType, totalCartItems}) {
    const [callModal, setCallModal] = useState(false);
    const [totalCartQuantity, setTotalCartQuantity] = useState();

    useEffect(() => {
        setTotalCartQuantity(totalCartItems)
    }, [totalCartItems]);

    const handleOnClick = (e) => {
        navProductType(e.target.innerText.toLowerCase())
    }

    return (
        <>
            <nav>
                <div className="navBelt">
                    <div className="wrapper">
                        <p>Nabila</p>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faHeart} />
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
