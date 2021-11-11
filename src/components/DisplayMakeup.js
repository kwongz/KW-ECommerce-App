import { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Modal from "./Modal";
import {FavoriteContext} from '../utils/favoriteStore'


function DisplayMakeup({ makeup, checkCartQuantity }) {

    const [currentDisplay, setCurrentDisplay] = useState([]);
    // Potential problem for future renders
    const buttons = [];
    const [callModal, setCallModal] = useState(false);
    const [makeupInfo, setMakeupInfo] = useState({});
    const [allMakeup, setAllMakeup] = useState([]);
    const [favoriteItemsArray, setFavoriteItemsArray] = useState([])
    
    // useContext Logic
    const {toggleFavorite} = useContext(FavoriteContext)

    useEffect(() => {
        setCurrentDisplay(makeup.slice(0, 20))
        setAllMakeup(makeup)
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
        <div className="displayMakeup">
            <ul className="allMakeupContainer">
                { toggleFavorite 
                    ? favoriteItemsArray.map((individualMakeup) => {
                        return (
                                <li 
                                    className="makeupCard" 
                                    key={individualMakeup.id}
                                    // onClick={() => handleModalInfo(individualMakeup)}
                                >
                                    <div onClick={() => handleModalInfo(individualMakeup)}>
                                    <div className="imageContainer">
                                        <img src={individualMakeup.api_featured_image} alt="individualMakeup.name" />
                                    </div>
                                    <div className="textContent">
                                        <p>{individualMakeup.brand}</p>
                                        <h3>{individualMakeup.name}</h3>
                                        <p>${roundPrice(individualMakeup.price)}</p>
                                    </div>
                                    </div>
                                    <button onClick={()=> setFavoriteItemsArray(favoriteItemsArray.filter(el => {
                                        return el !== individualMakeup
                                    }))}>
                                        <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                </li>
                        )
                    })
                    
                    : 
                    currentDisplay.map((individualMakeup) => {
                        console.log('hello')
                        return (
                            <li 
                            className="makeupCard" 
                            key={individualMakeup.id}
                            // onClick={() => handleModalInfo(individualMakeup)}
                            >
                                    <div onClick={() => handleModalInfo(individualMakeup)}>
                                    <div className="imageContainer">
                                        <img src={individualMakeup.api_featured_image} alt="individualMakeup.name" />
                                    </div>
                                    <div className="textContent">
                                        <p>{individualMakeup.brand}</p>
                                        <h3>{individualMakeup.name}</h3>
                                        <p>${roundPrice(individualMakeup.price)}</p>
                                    </div>
                                    </div>
                                    {/* give favourite button own component to toggle disable */}
                                    <button disabled={false} onClick={()=> {
                                        let disableButton = 1
                                        setFavoriteItemsArray([...favoriteItemsArray, individualMakeup])
                                        console.log(disableButton)
                                        disableButton = disableButton + 1
                                        console.log(disableButton)
                                    }}>
                                            <FontAwesomeIcon icon={faHeart} />
                                    </button>
                                </li>
                        )
                    })
                }
            </ul>
            {
                buttons.length > 1?
                <div className="numberedButtonContainer">
                    {buttons}
                </div>
                :null
            }

            {
                callModal ?
                <Modal
                    onClose={() => setCallModal(false)}
                    info={makeupInfo}
                    forComponent="quicklook"
                    checkCartQuantity={(cartQuantity) => checkCartQuantity(cartQuantity)}
                />
                : null
            }
        </div>
    )
}

export default DisplayMakeup;
