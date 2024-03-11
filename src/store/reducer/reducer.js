const initialState = {
    product: []
}

export const Reducer = (state = initialState,action) => {
    switch (action.type){
        case "GET_PRODUCT" :
            return {...state,product: action.payload}
        default:
            return state
    }
}
