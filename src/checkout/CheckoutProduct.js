import React from 'react'
import { CheckoutProductWrap } from './CheckoutSty'

function CheckoutProduct({item}) {
    return (
        <CheckoutProductWrap>
            <img src={item.image} alt=""/>
        </CheckoutProductWrap>
    )
}

export default CheckoutProduct
