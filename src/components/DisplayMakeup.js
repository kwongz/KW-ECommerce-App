import { useState } from "react";
import Modal from "./Modal";


function DisplayMakeup({ makeup }) {

    const [currentDisplay, setCurrentDisplay] = useState(makeup.slice(0, 19));
    // Potential problem for future renders
    const buttons = [];
    const [callModal, setCallModal] = useState(false);
    const [makeupInfo, setMakeupInfo] = useState({});
    const [addedToCart, setAddedToCart] = useState([]);


    const getDisplayDirectory = () => {
        // write code
        const buttonLength = Math.ceil(makeup.length / 20)

        for (let i = 0; i < buttonLength; i++) {
            buttons.push(<button className="numberedButtons" onClick={() => sortMakeup(i)} key={i}>{i + 1}</button>)
        }
    }
    getDisplayDirectory();

    const sortMakeup = (num) => {
        const startingPoint = num * 20;
        const endPoint = startingPoint + 19;

        setCurrentDisplay(makeup.slice(startingPoint, endPoint))
    }

    const handleModalInfo = (quickLookInfo) => {
        setMakeupInfo(quickLookInfo);
        setCallModal(true);
    }

    const roundPrice = (price) => {
        return (Math.round(price * 100) / 100).toFixed(2)
    }

    const handleAddToCart = (cartItem) => {
        const cartObj = {name: cartItem.name, quantity: 1, price: cartItem.price}
        setAddedToCart([...addedToCart,cartObj]);
    }


    return (
        <div className="wrapper">
            <ul className="allMakeupContainer">
                {
                    currentDisplay.map((individualMakeup) => {
                        return (
                            <li 
                                className="makeupCard" 
                                key={individualMakeup.id}
                                onClick={() => handleModalInfo(individualMakeup)}
                            >
                                <div className="imageContainer">
                                    <img src={individualMakeup.api_featured_image} alt="individualMakeup.name" />
                                </div>
                                <div className="textContent">
                                    <p>{individualMakeup.brand}</p>
                                    <h2>{individualMakeup.name}</h2>
                                    <p>${roundPrice(individualMakeup.price)}</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            {buttons}

            {
                callModal ?
                <Modal
                    onClose={() => setCallModal(false)}
                    info={makeupInfo}
                    forComponent="quicklook"
                    addToCart={handleAddToCart}
                    cart={addedToCart}
                    roundPrice={roundPrice}
                />
                : null
            }
        </div>
    )
}

export default DisplayMakeup;
