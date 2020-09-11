import styled from 'styled-components'

export const SubtotalWrap = styled.div`
    display : flex;
    flex-direction : column;
    width : 300px;
    height: 100px;
    padding : 20px;
    background-color : #f3f3f3;
    border : 1px solid #dddddd;
    justify-content : space-between;
    border-radius : 3px;

    .subtotal__gift {
        display : flex;
        align-items : center;

        input{
            margin-right : 5px;
        }
    }

    button{
        background-color : #f0c14b;
        border : 1px solid;
        border-color : #a88734 #9c7e31 #846a28;
        border-radius : 2px;
        width : 100%;
        height : 30px;
        margin-top : 10px;
        color : #111;
    }
`

export const CheckoutWrap = styled.div`
    display : flex;

    .checkout__ad{
        width : 100%;
        margin-bottom : 10px;
    }
    
    .checkout__title{
        margin-right : 10px;
        padding : 10px;
        border-bottom: 1px solid lightgray;
    }
`

export const CheckoutProductWrap = styled.div`
    display : flex;
    margin : 20px 0;

    .checkoutProduct__image{
        object-fit : contain;
        width : 180px;
        height : 180px;
    }

    .checkoutProduct__info{
        padding-left : 20px;
    }

    .checkoutProduct__title{
        font-size : 17px;
        font-weight : 800;
    }

    button{
        background-color : #f0c14b;
        border : 1px solid;
        border-color : #a88734 #9c7e31 #846a28;
    }
`