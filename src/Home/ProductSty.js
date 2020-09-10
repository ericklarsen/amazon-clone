import styled from "styled-components"

export const ProductWrap = styled.div`
    display : flex;
    flex-direction : column;
    align-items  :center;
    justify-content : flex-end;
    margin : 10px;
    max-height : 400px;
    min-width : 100px;
    padding : 20px;
    width : 100%;
    z-index : 1;
    background-color : white;

    img{
        max-height : 200px;
        width : 100%;
        object-fit : contain;
        margin-bottom : 15px;
    }

    .product__info{
        height : 100px;
        margin-bottom : 15px;
    }

    .product__price{
        margin-top : 5px;
    }

    button{
        background-color : #f0c14b;
        border : 1px solid;
        border-color : #a88734 #9c7e31 #846a28;
    }

    .product__rating{
        display : flex;
    }
`