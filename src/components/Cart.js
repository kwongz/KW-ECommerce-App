import { useState } from 'react'

function Cart( {cartItems} ) {
    const [cartInventory, setCartInventory] = useState(cartItems)

    const handleAdd = (item) => {
        const tempArray = [...cartItems]
        tempArray.filter((tempItem) => {
            if (tempItem.name === item.name) {
                return tempItem.quantity = tempItem.quantity + 1
            } 
        })
        setCartInventory(tempArray)
    }




    return (
        <>
            <ul>
                {
                    cartInventory.map((item) => {
                        return(
                            <li>
                                <p>{item.name}</p>
                                <p>{item.quantity}</p>
                                <button onClick={() => handleAdd(item)}>add</button>
                                <button>subtract</button>
                                <p>{item.price}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Cart
