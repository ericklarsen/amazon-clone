import React from 'react'
import { ProductWrap } from './ProductSty'
import { useStateValue } from '../StateProvider'

function Product({ id, title, image, price, rating }) {
    const [, dispatch] = useStateValue();

    const addToBasket = () =>{
        // Add item to basket ...
        dispatch({
            type : "ADD_TO_BASKET",
            item : {
                id : id,
                title : title,
                image : image,
                price : price,
                rating : rating
            }
        })
    }
    return (
        <ProductWrap>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_,i) => (
                                <span key = {i} role="img" aria-label="donut">⭐</span>
                            ))
                    }
                </div>
            </div>
            <img src={image} alt="product" />
            <button onClick = {addToBasket}>Add to basket</button>
        </ProductWrap>
    )
}

export default Product
