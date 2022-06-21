import {nft_items} from '../../config/nft_items'
import {SELECT_ITEM} from '../type'

const initialState = {
    nftItems: nft_items 
}

export const itemsListReducer = (state = initialState, action:any) => {
    switch (action.type){
        case SELECT_ITEM:{
            if(action.payload.selectorText === ''){
                return {
                    ...state,
                    nftItems: nft_items
                }
            }
            return {
                ...state,
                nftItems: state.nftItems.filter((el:any)=> el.title.includes(action.payload.selectorText))     
            }
        }
        default: {
            return state
        }
    }
}