import ReactDom from "react-dom";

function Modal( { open, onClose, children }) {
    if(!open) {
        return null;
    }

    return ReactDom.createPortal(
        <div className="modal">
            {children}
            <button onClick={onClose}>Close Modal</button>
        </div>,
        document.getElementById('portal')
    )
}

export default Modal
