import React, {useEffect}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


function MakeUpCard({individualMakeup, handleModalInfo, roundPrice, handleAddRemoveFavorite}) {


    return (
        <li 
            className="makeupCard" 
            key={individualMakeup.id}
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
            <button className='heartButton' onClick={()=> handleAddRemoveFavorite(individualMakeup)}>
                <FontAwesomeIcon style={{color:individualMakeup.favorite ? 'red' : null}} icon={faHeart} />
            </button>
        </li>
    )
}

export default MakeUpCard
