import C from '../constants'

export function getAllProducts (state = [], action) {
    switch(action.type){
        case C.REQUEST_PRODUCTS :
            return Object.assign({}, state, {
               isFetching: true 
            })
        case C.PRODUCTS_RETRIEVED_SUCCESS :
            // return[
            //     ...state,
            //     action.payload
            // ]
            return Object.assign({}, state, {
                isFetching: false,
                columns: action.response.columns, //.view.columns
                rows: action.response.rows //.data
             })
        case C.PRODUCTS_RETRIEVED_FAILURE :
             return Object.assign({}, state, {
                 isFetching: false,
                 errorMessage: action.error
             })
        default:
            return state
    }
}
