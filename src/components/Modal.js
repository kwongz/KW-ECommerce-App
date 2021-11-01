import ReactDom from "react-dom";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import DisplayItemInfo from "./DisplayItemInfo";

function Modal({ onClose, info, forComponent, addToCart, cart }) {
    const [forCart, setForCart] = useState(false);
    
    useEffect(() => {
        if(forComponent === "quicklook") {
            setForCart(false)
            console.log("quicklook")
        } else if(forComponent === "cart") {
            setForCart(true)
            console.log("cart")
        }
    },[forComponent])

    const handleOnClick = () => {
        // processing the info to pass to parent state
        addToCart(info)
        setForCart(true);
    }


    return ReactDom.createPortal(
        <>
            {
                forCart? 
                <div className="cartContainer">
                    <Cart cartItems={cart}/>
                    <button onClick={onClose}>close cart</button>
                </div>
                :
                <div className="quicklookContainer">
                    <div className="quicklook wrapper">
                        <DisplayItemInfo info={info} />
                        <button className="closeModalButton" onClick={onClose}>x</button>
                        <button onClick={handleOnClick}>Add TO CART</button>
                    </div>
                </div>

            }
        </>,
        document.getElementById('portal')
    )
}

export default Modal
