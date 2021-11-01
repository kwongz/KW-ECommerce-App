import ReactDom from "react-dom";
import DisplayItemInfo from "./DisplayItemInfo";

function Modal( { open, onClose, info }) {
    if(!open) {
        return null;
    }

    return ReactDom.createPortal(
        <div className="quicklookContainer">
            <div className="quicklook wrapper">
                <DisplayItemInfo info={info} />
                <button onClick={onClose}>x</button>
            </div>
        </div>,
        document.getElementById('portal')
    )
}

export default Modal
