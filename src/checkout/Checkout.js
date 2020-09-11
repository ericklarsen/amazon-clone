import React from 'react'
import { CheckoutWrap } from './CheckoutSty'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
    const [{ basket }] = useStateValue()
    return (
        <CheckoutWrap>
            <div className="checkout__left">
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
                            {basket?.map((item, i) => (
                                <CheckoutProduct
                                    key={i}
                                    item={item} />
                            ))}
                        </div>
                    )}
            </div>
            {basket.length > 0  && (
                <div className="checkout_right">
                    <Subtotal/>
                </div>
            )}
        </CheckoutWrap>
    )
}

export default Checkout
