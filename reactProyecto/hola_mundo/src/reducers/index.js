//action types
const INCREMENTAR = "CONTADOR/INCREMENTAR";
const DECREMENTAR = "CONTADOR/DECREMENTAR";
const SETEAR="CONTADOR/SETETAR";
//end action types

//actions creators
export const incrementar=()=>({
    type:INCREMENTAR
});

export const decrementar=()=>({
    type:DECREMENTAR
});

export const setear=(payload)=>({
    type:SETEAR,
    payload
});
//end actions creator

const initialState=0;

//Reducer
export default function(state=initialState,action){
    console.log(action);
    switch (action.type) {
        case INCREMENTAR:
            return state + 1;
        case DECREMENTAR:
            return state - 1;
        case SETEAR:
            return action.payload
        default:
            return state;
    }
}
//End Reducer