import ReactDom from "react-dom";
import DisplayItemInfo from "./DisplayItemInfo";

function Modal( { open, onClose, info }) {
    if(!open) {
        return null;
    }

    return ReactDom.createPortal(
        <div className="modal">
            <DisplayItemInfo info={info} />
            <button onClick={onClose}>Close Modal</button>
        </div>,
        document.getElementById('portal')
    )
}

export default Modal
