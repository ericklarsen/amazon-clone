import React from 'react'
import { SubtotalWrap } from './CheckoutSty'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../StateProvider'
import { getBasketTotal } from '../reducer'

function Subtotal() {
    const [{basket}] = useStateValue()
    return (
        <SubtotalWrap>
            <CurrencyFormat
                renderText = {(value) =>(
                    <>
                    <p>
                        Subtotal ({basket.length} items) : <strong> {` ${value}`} </strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/>This Order Contains     
                    </small>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix = {"$"}
            />
            <button>Proceed to Checkout</button>
        </SubtotalWrap>
    )
}

export default Subtotal
