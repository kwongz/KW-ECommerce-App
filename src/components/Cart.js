import { useState, useEffect } from 'react'
import {cartArray} from './shoppingCartArray';

function Cart( {checkCartQuantity}) {
    const [cartInventory, setCartInventory] = useState(cartArray)
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        handleTotalCost();
        totalCartItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleAddSubtract = (item, action) => {
        const cartItemIndex = cartArray.findIndex(cartItem => cartItem.name === item.name)
        if (action) {
            cartArray[cartItemIndex].quantity = cartArray[cartItemIndex].quantity + 1;
            cartArray[cartItemIndex].finalPrice = cartArray[cartItemIndex].price * cartArray[cartItemIndex].quantity;
        } else {
            cartArray[cartItemIndex].quantity = cartArray[cartItemIndex].quantity - 1;
            cartArray[cartItemIndex].finalPrice = cartArray[cartItemIndex].price * cartArray[cartItemIndex].quantity;
            if (cartArray[cartItemIndex].quantity <= 0) {
                removeItem(cartArray[cartItemIndex]);
            }
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
            <h3>Shopping Cart ({cartArray.length})</h3>
            <ul>
                {
                    cartInventory.map((item, index) => {
                        return(
                            <li className="cartItem"key={index}>
                                <div>
                                    <p>{item.name}: ${item.price}</p>
                                    <p>Qty: {item.quantity}</p>
                                    {
                                        item.color ?
                                            <p>Color: {item.color.colour_name} <figure className='cartColorSphere' 
                                            style={{backgroundColor:item.color.hex_value}}/></p>
                                        
                                        :null
                                    }
                                    <button onClick={() => {removeItem(item)}}>Remove</button>
                                    <button onClick={() => handleAddSubtract(item,true)}>Add</button>
                                    <button onClick={() => handleAddSubtract(item,false)}>Subtract</button>
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
