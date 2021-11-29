import {useState} from 'react'

function DisplayItemInfo({info, handleOnClick}) {

const [colorChoice, setColorChoice] = useState('')

const handleColorChoice = (color) => {
    setColorChoice(color)
}

    return (
        <>
            <div className="imageContainer">
                <img src={info.api_featured_image} alt={info.name} />
            </div>
            <div className="textContent">
                <p className="brand">{info.brand}</p>
                <h2>{info.name}</h2>
                <p className="price">
                    ${info.price}
                </p>
                <p className='description'>{info.description}
                    <a className='websiteLink'href={info.website_link}>Link to Website</a>
                </p>
                <ul className='colorHolder'>
                    {
                        info.product_colors.map((color, index) => {
                            return <li key={`${index}${color}`} onClick={()=>handleColorChoice(color)}>
                                <figure className='colorSphere' style={{backgroundColor:color.hex_value}}></figure>
                            </li>
                        })
                    }
                </ul>
                <p>Selected Color: {colorChoice.colour_name}</p>
            <button onClick={() => handleOnClick(colorChoice)}>Add to Cart</button>
            </div>
        </>
    )
}

export default DisplayItemInfo
