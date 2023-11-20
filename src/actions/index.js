export const increment = () =>{
    return{
        type: "increment"
    }
}

export const decrement = () =>{
    return{
        type: "decrement"
    }
}

export const reset = () =>{
    return{
        type: "reset"
    }
}

export const setdata = (data) =>{
    return{
        type: 'setdata',
        payload: data
    }
}