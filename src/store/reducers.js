import { combineReducers } from 'redux'
import { getAllProducts } from './getAllProducts-reducer'
import { productOverview } from './productOverview-reducer'

const ABzProducts = combineReducers({
    getAllProducts,
    productOverview
})

export default ABzProducts