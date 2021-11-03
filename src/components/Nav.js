import Modal from "./Modal";
import {useState} from 'react';


function Nav({ navProductType }) {
    const [callModal, setCallModal] = useState(false);

    const handleOnClick = (e) => {
        navProductType(e.target.innerText.toLowerCase())
    }

    return (
        <>
            <nav>
                <ul className="navigation">
                    <li onClick={handleOnClick}>Foundation</li>
                    <li onClick={handleOnClick}>Blush</li>
                    <li onClick={handleOnClick}>Lipstick</li>
                    <li onClick={() => setCallModal(true)}>Cart</li>
                </ul>
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
