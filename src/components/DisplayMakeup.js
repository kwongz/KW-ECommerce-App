import { useState } from "react";
import DisplayItemInfo from "./DisplayItemInfo";
import Modal from "./Modal";


function DisplayMakeup({ makeup }) {
    // save all the makeup into an array where it can be modified
    // use splice to take 20 items from that array and display to the currentDisplay
    // once user clicks "display more" button, run the function again
    // splice 20 more items from the array and add it in addition to the 20 currentDisplay (40 displayed items)
    // keep adding 20 each time user clicks "display more" button

    // How to add numbered directory
    // check the length of the props array items
    // based on the length, we add an appropriate number buttons
    // Math.ceil(array.length / 20)  -> ceil rounds up to the greatest integer
    // loop through the array

    // const initialMakeupDisplay = makeup.slice(0,19)
    // console.log(initialMakeupDisplay)
    const [currentDisplay, setCurrentDisplay] = useState(makeup.slice(0, 19));
    const buttons = [];
    const [callModal, setCallModal] = useState(false);
    let [makeupInfo, setMakeupInfo] = useState({});


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

    const handleModalInfo = (info) => {
        setMakeupInfo(info);
        setCallModal(true);
    }

    const roundPrice = (price) => {
        return (Math.round(price * 100) / 100).toFixed(2)
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
                />
                : null
            }
        </div>
    )
}

export default DisplayMakeup;
