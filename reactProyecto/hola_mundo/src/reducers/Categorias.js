//action types
const ADD_CATEGORY="category/add";
const SELECT_CATEGORY="category/select";

//action creators

/**
 * id
 * name
 */
export const addCategory= payload =>({
    type:ADD_CATEGORY,
    payload:{
        ...payload,
        id:Math.random().toString(36)
    }
});

export const selectCategory = payload =>({
    type:SELECT_CATEGORY,
    payload
});
//Reducers

//Estado inicial
const initialState={
    data:[{id:1,name:"defecto"}],
    selected:1
};

export default function reducer(state=initialState,action){
    switch (action.type) {
        case ADD_CATEGORY:
            return{
                ...state,
                //es igual que utilizar el metodo concat
                data:[...state.data, action.payload]
            }
        case SELECT_CATEGORY:
             return{
                 ...state,
                 selected:action.payload
             }
    
        default:
            return state;
    }
}