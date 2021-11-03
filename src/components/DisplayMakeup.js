import { useEffect, useState } from "react";
import Modal from "./Modal";
import { shoppingCartArray } from './shoppingCartArray';


function DisplayMakeup({ makeup }) {

    const [currentDisplay, setCurrentDisplay] = useState([]);
    // Potential problem for future renders
    const buttons = [];
    const [callModal, setCallModal] = useState(false);
    const [makeupInfo, setMakeupInfo] = useState({});
    const [allMakeup, setAllMakeup] = useState([]);

    useEffect(() => {
        let newArray = [];
        makeup.forEach((makeupItem) => {
            if(makeupItem.price > 0) {
                newArray.push(makeupItem);
            }
        });
        setCurrentDisplay(newArray.slice(0, 20))
        setAllMakeup(newArray)
    }, [makeup])


    const getDisplayDirectory = () => {
        // write code
        const buttonLength = Math.ceil(allMakeup.length / 20)

        for (let i = 0; i < buttonLength; i++) {
            buttons.push(<button className="numberedButtons" onClick={() => sortMakeup(i)} key={i}>{i + 1}</button>)
        }
    }

    const sortMakeup = (num) => {
        const startingPoint = num * 20;
        const endPoint = startingPoint + 20;

        setCurrentDisplay(allMakeup.slice(startingPoint, endPoint))
    }

    const handleModalInfo = (quickLookInfo) => {
        setMakeupInfo(quickLookInfo);
        setCallModal(true);
    }

    const roundPrice = (price) => {
        return (Math.round(price * 100) / 100).toFixed(2)
    }

    getDisplayDirectory();


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
                    roundPrice={roundPrice}
                />
                : null
            }
        </div>
    )
}

export default DisplayMakeup;
