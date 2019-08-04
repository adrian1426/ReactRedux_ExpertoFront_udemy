//action types
const ADD_NEWS="news/add";

//action creators

/**
 * id
 * name
 * category_id
 */
export const addNews= payload =>({
    type:ADD_NEWS,
    payload:{
        ...payload,
        id:Math.random().toString(36)
    }
});

//Reducers

const initialState={
    data:[]
};

export default function reducer(state=initialState,action){
    switch (action.type) {
        case ADD_NEWS:
            return{
                ...state,
                data:[...state.data, action.payload]
            }
    
        default:
            return state;
    }
}