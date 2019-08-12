//creador de types
const makeType = modulo => action =>`${modulo}/${action}`;
const t= makeType('thunk');

//action types
const FETCH_START=t("start");
const FETCH_SUCCESS=t("success");
const FETCH_ERROR=t("error");
// const FETCH_START="thunk/start";
// const FETCH_SUCCESS="thunk/success";
// const FETCH_ERROR="thunk/error";

//action creator
const fetchStart = () =>({
    type:FETCH_START
});

const fetchSuccess = payload =>({
    type:FETCH_SUCCESS,
    payload
});

const fetchError = error =>({
    type:FETCH_ERROR,
    error
});

const url="https://jsonplaceholder.typicode.com/users";

//forma ideal del estado
const initialState={
    data:{
        1:{name:'adrian'}
    },
    fetching:false,
    fetched:false,
    error:null
}

//reducer
export function reducer (state=initialState,action){
    console.log(action);
    switch (action.type) {
        case FETCH_START:
            return{
                ...state,
                fetching:true
            }
        case FETCH_SUCCESS:
            return{
                ...state,
                data:action.payload
            }
        case FETCH_ERROR:
            return{
                ...state,
                error:action.error
            }
        default:
            return state;
    }
    
}

export default payload =>
async (dispatch,getState)=>{
    dispatch(fetchStart());

    try {
        const result= await fetch(url);
        const json= await result.json();
        dispatch(fetchSuccess(json));   
        console.log("json: ",json);
    } catch (error) {
        dispatch(fetchError(error));
    }
}