import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development';

function Cart( {cartItems} ) {
    const [cartInventory, setCartInventory] = useState(cartItems)
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        handleTotalCost();     
    }, cartItems )

    const handleAdd = (item) => {
        const tempArray = [...cartItems]
        tempArray.filter((tempItem) => {
            if (tempItem.name === item.name) {
                tempItem.quantity = tempItem.quantity + 1;
                tempItem.finalPrice = tempItem.quantity * tempItem.price;
            } 
        })
        handleTotalCost();
        setCartInventory(tempArray)
    }

    const handleTotalCost = () => {
        let cost = 0;
        cartInventory.forEach((item) => {
            cost = cost + item.finalPrice;
        })
        setTotalCost(cost);
    }




    return (
        <>
            <ul>
                {
                    cartInventory.map((item, index) => {
                        return(
                            <li key={index}>
                                <p>{item.name}</p>
                                <p>{item.quantity}</p>
                                <button onClick={() => handleAdd(item)}>add</button>
                                <button>subtract</button>
                                <p>{item.finalPrice}</p>
                            </li>
                        )
                    })
                }
            </ul>
            <p className="finalCost">${totalCost}</p>
        </>
    )
}

export default Cart
