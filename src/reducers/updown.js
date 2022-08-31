const initialState=10;
const IncrementDecrement=(state=initialState,action)=>{
    switch (action.type){
        case "INCREMENT" : return state + 1;
        case "DECREMENT" : return state - 1;
        case "MULTIPLICATION" : return state * 2;
        
        default : return state

    }
}

export default IncrementDecrement;