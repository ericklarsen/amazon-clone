export const initialState = {
    basket: [],
    users : null,
}

const reducer = (state, action) => {
    console.log(initialState)
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // Logic for adding item to basket
            return { 
                ...state,
                basket : [...state.basket, action.item]
             }
            break;
        case 'REMOVE_FROM_BASKET':
            // Logic for removing item to basket
            return { state }
            break;
        default: return state
    }
}

export default reducer;