import {configureStore} from '@reduxjs/toolkit'
import { itemListReducer } from './reducers/itemListReducer'
import { itemsListReducer } from './reducers/itemsListReducer'

export default configureStore({
    reducer: {
        itemListReducer,
        itemsListReducer
    },
})