let allCartItems = [];

function Cart( {cartItems} ) {
    let cartItemClone = {...cartItems};
    
    console.log("test");
    allCartItems.push("cartItemClone");
    console.log(allCartItems);

    return (
        <>
            <ul>
                {/* {
                    cartItems.map((item) => {
                        return(
                            <li>
                                <p>{item.title}</p>
                            </li>
                        )
                    })
                } */}
            </ul>
        </>
    )
}

export default Cart
