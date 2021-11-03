import ReactDom from "react-dom";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import DisplayItemInfo from "./DisplayItemInfo";
import { useTransition, animated } from 'react-spring'
import { shoppingCartArray } from "./shoppingCartArray";

function Modal({ onClose, info, forComponent, roundPrice }) {
    const [forCart, setForCart] = useState(false);
    const [fromNav, setFromNav] = useState(false);
    const [cartItem, setCartItem] = useState();

    useEffect(() => {
        if (forComponent === "quicklook") {
            setForCart(false)
        } else if (forComponent === "cart") {
            setForCart(true)
            if (forComponent === "cartNav") {
                setFromNav(true);
            } else {
                setFromNav(false);
            }
        }
    }, [forComponent])

    const handleOnClick = () => {
        // processing the info to pass to parent state

        shoppingCartArray(info)
        setForCart(true);
    }


    return ReactDom.createPortal(
        <>
            {
                forCart ?
                    <div className="cartContainer">
                        <Cart />
                        <button onClick={onClose}>close cart</button>
                    </div>
                    // fromNav ? 
                    //     <Cart />
                    //     :
                    //         <div className="cartContainer">
                    //             <Cart cartItem={cartItem} roundPrice={roundPrice}/>
                    //             <button onClick={onClose}>close cart</button>
                    //         </div>
                    //     )
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




