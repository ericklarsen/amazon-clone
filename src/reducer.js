export const initialState = {
    basket: [
        {
            id: '1',
            title: '1',
            price: 589.5,
            rating: 4,
            image: 'https://images-na.ssl-images-amazon.com/images/I/41ziKxGAbnL._AC_.jpg'
        },
        {
            id: '2',
            title: '1',
            price: 589.5,
            rating: 4,
            image: 'https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL._AC_UL600_SR393,600_.jpg'
        }
    ],
    users: null,
}

export const getBasketTotal =  (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
            break;
        case 'REMOVE_FROM_BASKET':
            // Logic for removing item to basket

            // we clone the basket 
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            
            if(index >= 0){
                // item exists in basket, remove it ...
                newBasket.splice(index,1)
            }else{
                console.warn(`Can't remove product (id : ${action.id})`)
            }
            return { 
                ...state, basket : newBasket
            }
            break;
        default: return state
    }
}

export default reducer;