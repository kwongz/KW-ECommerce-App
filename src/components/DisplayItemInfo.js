import { useState } from 'react'

function DisplayItemInfo({ info, handleOnClick, roundPrice }) {

    const [colorChoice, setColorChoice] = useState('')

    const handleColorChoice = (color) => {
        setColorChoice(color)
    }

    return (
        <>
            <div className="imageAndColourOptions">
                <div className="imageContainer">
                    <img src={info.api_featured_image} alt={info.name} />
                </div>
                <ul className='colorHolder'>
                    {
                        info.product_colors.map((color, index) => {
                            return <li key={`${index}${color}`} onClick={() => handleColorChoice(color)}>
                                <figure className='colorSphere' style={{ backgroundColor: color.hex_value }}></figure>
                            </li>
                        })
                    }
                    <p>Selected Color: {colorChoice.colour_name}</p>
                </ul>
            </div>
            <div className="textContent">
                <p className="brand">{info.brand}</p>
                <h4>{info.name}</h4>
                <p className="price">
                    ${roundPrice(info.price)}
                </p>
                <p className='description'>{info.description}<a className='websiteLink' href={info.website_link}>Link to Website</a></p>
                <button onClick={() => handleOnClick(colorChoice)}>Add to Cart</button>
            </div>
        </>
    )
}

export default DisplayItemInfo
