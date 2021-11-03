import { useState, useEffect } from 'react'
import {shoppingCartArray, cartArray} from './shoppingCartArray';

function Cart( {cartItem}) {
    const [cartInventory, setCartInventory] = useState(cartArray)
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        shoppingCartArray(cartItem);
        handleTotalCost();  
    }, [cartItem] )

    // const handleAdd = (item) => {
    //     const tempArray = [...cartItem]
    //     tempArray.filter((tempItem) => {
    //         if (tempItem.name === item.name) {
    //             tempItem.quantity = tempItem.quantity + 1;
    //             tempItem.finalPrice = tempItem.quantity * tempItem.price;
    //         } 
    //     })
    //     handleTotalCost();
    //     setCartInventory(tempArray)
    // }

    // const handleTotalCost = () => {
    //     let cost = 0;
    //     cartInventory.forEach((item) => {
    //         cost = cost + item.finalPrice;
    //     })
    //     setTotalCost(cost);
    // }




    const handleAdd = (item) => {
        cartArray.filter((tempItem) => {
            if (tempItem.name === item.name) {
                tempItem.quantity = tempItem.quantity + 1;
                tempItem.finalPrice = tempItem.quantity * tempItem.price;
            } 
        })
        handleTotalCost();
        setCartInventory(cartArray)
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
        <p>Cart</p>
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
