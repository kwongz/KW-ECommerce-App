import ReactDom from "react-dom";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import DisplayItemInfo from "./DisplayItemInfo";
import { shoppingCartArray } from "./shoppingCartArray";

function Modal({ onClose, info, forComponent, checkCartQuantity }) {
    const [forCart, setForCart] = useState(false);
    const [forQuickLook, setforQuickLook] = useState(false);

    useEffect(() => {
        if (forComponent === "quicklook") {
            setforQuickLook(true)
        } else if (forComponent === "cart") {
            setForCart(true)
        }
    }, [forComponent])


    const handleOnClick = (userColorChoice) => {
        // processing the info to pass to parent state
        if (userColorChoice || info.product_colors.length === 0){
            setforQuickLook(false)
            shoppingCartArray(info, userColorChoice)
            setForCart(true);
        } else if ( userColorChoice === '') {
            alert("please select a color")
        }

    }


    return ReactDom.createPortal(
        <>
            {
                forCart ?
                    <div className="cartModal" onClick={onClose}>
                        <div className="cartContainer" onClick={e => e.stopPropagation()}>
                            <Cart checkCartQuantity={(cartQuantity) => checkCartQuantity(cartQuantity)}/>
                            <button onClick={onClose}>close cart</button>
                        </div>
                    </div>
                    :
                    null
            }
            {
                forQuickLook ?
                    <div className="quicklookContainer" onClick={onClose}>
                        <div className="quicklook wrapper" onClick={e => e.stopPropagation()}>
                            <DisplayItemInfo info={info} handleOnClick={handleOnClick}/>
                            <button className="closeModalButton" onClick={onClose}>x</button>
                        </div>
                    </div>
                : 
                null
            }
        </>,
        document.getElementById('portal')
    )
}

export default Modal




