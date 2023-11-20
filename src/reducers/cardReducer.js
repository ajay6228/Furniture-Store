const intialState = {
    data: [
        {id:101,
        title:'ipad'}
    ]
    
}

export const cardsReducer = (state = intialState, action) => {
    switch(action.type){
        case "setdata":
            return{
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}