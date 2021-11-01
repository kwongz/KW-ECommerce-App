import ReactDom from "react-dom";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import DisplayItemInfo from "./DisplayItemInfo";

function Modal({ onClose, info, forComponent }) {
    const [forCart, setForCart] =useState(false);
    const [addedToCart, setAddedToCart] = useState([]);
    
    useEffect(() => {
        if(forComponent === "quicklook") {
            setForCart(false)
            console.log("quicklook")
        } else if(forComponent === "cart") {
            setForCart(true)
            console.log("cart")
        }
    },[forComponent])

    const handleAddToCart = () => {
        setAddedToCart(info);
        setForCart(true);
    }

    return ReactDom.createPortal(
        <>
            {
                forCart? 
                <div className="cartContainer">
                    <Cart cartItems={addedToCart}/>
                    <button onClick={onClose}>close cart</button>
                </div>
                :
                <div className="quicklookContainer">
                    <div className="quicklook wrapper">
                        <DisplayItemInfo info={info} />
                        <button className="closeModalButton" onClick={onClose}>x</button>
                        <button onClick={handleAddToCart}>Add TO CART</button>
                    </div>
                </div>

            }
        </>,
        document.getElementById('portal')
    )
}

export default Modal
