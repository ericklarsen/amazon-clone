import React from 'react'
import { CheckoutWrap } from './CheckoutSty'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
    const [{ basket }] = useStateValue()
    return (
        <CheckoutWrap>
            <img
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                alt="ads"
                className="checkout__ad" />

            {basket?.length === 0 ? (
                <div>
                    <h2 className="checkout__title">Your shopping basket is empty</h2>
                    <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your shopping basket</h2>
                    {basket.map(item=>(
                    <CheckoutProduct
                    item = { item} />
                    ))}
                </div>
                )}
        </CheckoutWrap>
    )
}

export default Checkout
