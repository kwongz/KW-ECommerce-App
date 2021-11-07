
function DisplayItemInfo({info, handleOnClick}) {
    console.log(info)

    return (
        <>
            <div className="imageContainer">
                <img src={info.api_featured_image} alt={info.name} />
                <p>{info.category}</p>
            </div>
            <div className="textContent">
                <a href={info.website_link}><p className="brand">{info.brand}</p></a>
                <h2>{info.name}</h2>
                <p className="price">
                    ${info.price}
                </p>
                <p className='description'>{info.description}</p>
            <button onClick={handleOnClick}>Add to Cart</button>
            </div>
        </>
    )
}

export default DisplayItemInfo
