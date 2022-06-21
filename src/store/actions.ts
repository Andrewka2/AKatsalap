import { SELECT_ITEM } from './type'

export function selectItem( selectorText:string ){
    return {
        type: SELECT_ITEM,
        payload: {
            selectorText
        },
    }
}