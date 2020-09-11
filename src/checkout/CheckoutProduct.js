import React from 'react'
import { CheckoutProductWrap } from './CheckoutSty'
import { useStateValue } from '../StateProvider'

function CheckoutProduct({ item }) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () =>{
        // remove item from basket
        dispatch({
            type : "REMOVE_FROM_BASKET",
            id: item.id
        })
    }
    return (
        <CheckoutProductWrap>
            <img className = "checkoutProduct__image" src={item.image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{item.title} </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{item.price} </strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(item.rating)
                            .fill()
                            .map((_, i) => (
                                <span key = {i} role="img" aria-label="donut">⭐</span>
                            ))
                    }
                </div>
                <button onClick = {removeFromBasket}>Remove from basket</button>
            </div>
        </CheckoutProductWrap>
    )
}

export default CheckoutProduct
