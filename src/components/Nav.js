import Modal from "./Modal";
import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {cartArray} from './shoppingCartArray';


function Nav({ navProductType }) {
    const [callModal, setCallModal] = useState(false);
    const [cartCount, setCartCount] = useState()


    useEffect(() => {
        countItems();
    }, [cartArray])

    const handleOnClick = (e) => {
        navProductType(e.target.innerText.toLowerCase())
    }

    const countItems = () => {
        let count  = 0
        console.log(cartArray)
        cartArray.forEach(cartItem => {
            count = count + cartItem.quantity
        })
        setCartCount(count)
    }

    return (
        <>
            <nav>
                <div className="navBelt">
                    <ul className="wrapper">
                        <li><FontAwesomeIcon icon={faHeart} /></li>
                        <li onClick={() => setCallModal(true)}><FontAwesomeIcon icon={faShoppingCart} /></li>
                        <li>{cartCount}</li>
                    </ul>
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
                    />
                    : null
            }
        </>
    )
}

export default Nav
