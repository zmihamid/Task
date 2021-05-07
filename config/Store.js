import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { HomeReducer } from '../redux/Home/home-reducer'

const rootReducer = combineReducers({
    home: HomeReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store