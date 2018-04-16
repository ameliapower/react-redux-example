import C from '../constants'

export function productOverview (state="", action) {
    switch(action.type){
        case C.GET_TOTAL_NUMBER_OF_PRODUCTS :
            return Object.assign({}, state, {
               isFetching: false,
               numberOfProducts: action.response.length
            })
        default:
            return state
    }
}

