import { combineReducers } from 'redux'
import products from './product'
import cart from './cart'
import wishlist from './wishlist'
import quickView from './quickView'
import compare from './compare'
import productFilters from './productFilters'
import location from './location'
import auth from './auth'

const rootReducer = combineReducers({
    products,
    cart,
    wishlist,
    quickView,
    compare,
    productFilters,
    location,
    auth
})

export default rootReducer