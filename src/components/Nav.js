
function Nav({ navProductType }) {

    const handleOnClick = (e) => {
        navProductType(e.target.innerText.toLowerCase())
    }

    return (
        <nav>
            <ul className="navigation">
                <li onClick={handleOnClick}>Foundation</li>
                <li onClick={handleOnClick}>Blush</li>
                <li onClick={handleOnClick}>Lipstick</li>
                <li>Cart</li>
            </ul>
        </nav>
    )
}

export default Nav
