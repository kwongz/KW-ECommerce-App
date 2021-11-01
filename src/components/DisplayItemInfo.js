
function DisplayItemInfo({info}) {

    return (
        <>
            <div className="imageContainer">
                <img src={info.api_featured_image} alt={info.name} />
            </div>
            <div className="textContent">
                <p className="brand">{info.brand}</p>
                <h2>{info.name}</h2>
                <p className="price">
                    `${info.price}`
                </p>

            </div>
        </>
    )
}

export default DisplayItemInfo
