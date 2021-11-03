import ReactDom from "react-dom";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import DisplayItemInfo from "./DisplayItemInfo";
import { useTransition, animated } from 'react-spring'

function Modal({ onClose, info, forComponent, roundPrice }) {
    const [forCart, setForCart] = useState(false);
    const [cartItem, setCartItem] = useState();

    useEffect(() => {
        if (forComponent === "quicklook") {
            setForCart(false)
        } else if (forComponent === "cart") {
            setForCart(true)
        }
    }, [forComponent])

    const handleOnClick = () => {
        // processing the info to pass to parent state
        // shoppingCartArray(info);

        setCartItem(info)
        setForCart(true);
    }

    const transition = useTransition(forCart, {
        from: { x: 100, opacity: 0 },
        enter: { x: 0, opacity: 1 },
        leave: { x: 100, opacity: 0 },
    });


    return ReactDom.createPortal(
        <>
            {
                forCart ?
                    transition((style, item) => item ?
                        <animated.div className="cartContainer item" style={style}>
                            <Cart cartItem={cartItem} />
                            <button onClick={onClose}>close cart</button>
                        </animated.div>
                        : ''
                    )
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




