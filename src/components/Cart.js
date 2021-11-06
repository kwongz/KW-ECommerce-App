import { useState, useEffect } from 'react'
import {cartArray} from './shoppingCartArray';

function Cart( {checkCartQuantity}) {
    const [cartInventory, setCartInventory] = useState(cartArray)
    const [totalCost, setTotalCost] = useState(0);

    
    // everytime cartInventory changes, calculate quantity 

    useEffect(() => {
        handleTotalCost();
        totalCartItems();
    }, [])

    const handleAddSubtract = (item, action) => {
        if (action) {
            cartArray.filter((tempItem) => {
                if (tempItem.name === item.name) {
                    tempItem.quantity = tempItem.quantity + 1;
                    tempItem.finalPrice = tempItem.quantity * tempItem.price;
                } 
            })
        } else {
            cartArray.filter((tempItem) => {
                if (tempItem.name === item.name) {
                    tempItem.quantity = tempItem.quantity - 1;
                    tempItem.finalPrice = tempItem.quantity * tempItem.price;
                    if (tempItem.quantity <= 0) {
                        removeItem(tempItem);
                    }
                } 
            })
        }
        handleTotalCost();
        setCartInventory(cartArray)
        totalCartItems();
    }

    const removeItem = (item) => {
        const cartItemIndex = cartArray.findIndex(cartItem => cartItem.name === item.name)
        cartArray.splice(cartItemIndex,1)
        setCartInventory(cartArray)
        handleTotalCost();
        totalCartItems();
    }


    const handleTotalCost = () => {
        let cost = 0;
        if(cartInventory.length > 0) {
            cartInventory.forEach((item) => {
                    cost = cost + item.finalPrice;
            })
        } else {
            cost = 0
        }
        setTotalCost(cost);
    }

    const totalCartItems = () => {
        let count = 0;
        cartArray.forEach((cartItem) => {
            count = count + cartItem.quantity;
        })
        checkCartQuantity(count);
    }


    return (
        <>
            <h3>Shopping Cart</h3>
            <ul>
                {
                    cartInventory.map((item, index) => {
                        return(
                            <li className="cartItem"key={index}>
                                <div>
                                    <p>{item.name}</p>
                                    <p>Qty: {item.quantity}</p>
                                    <button onClick={() => {removeItem(item)}}>Remove</button>
                                    <button onClick={() => handleAddSubtract(item,true)}>add</button>
                                    <button onClick={() => handleAddSubtract(item,false)}>subtract</button>
                                    <p>${item.finalPrice}</p>
                                </div>
                                <div className="cartItemImage">
                                    <img src={item.img} alt={item.name}/>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            <p className="finalCost">Subtotal: ${totalCost}</p>
        </>
    )
}

export default Cart
