
const initialState = {
    num: 1
}

export const itemListReducer = (state = initialState, action:any) => {
    switch (action.type){
        case "Test":{
            return {
                ...state,
            }
        }
        default: {
            return state
        }
    }
}