import ReactDom from "react-dom";
import { useState } from "react/cjs/react.development";
import DisplayItemInfo from "./DisplayItemInfo";

function Modal({ open, onClose, info, forComponent }) {
    const [forCart, setForCart] =useState(false);

    if (!open) {
        return null;
    } else {
        if(forComponent === "quicklook") {
            setForCart(false)
        } else if(forComponent === "cart") {
            setForCart(true)
        }
    }


    return ReactDom.createPortal(
        <>
            {
                forCart? 
                <div className="quicklookContainer">
                    <div className="quicklook wrapper">
                        <DisplayItemInfo info={info} />
                        <button onClick={onClose}>x</button>
                    </div>
                </div>
                :
                <div className="cartContainer"></div>

            }
        </>,
        document.getElementById('portal')
    )
}

export default Modal
