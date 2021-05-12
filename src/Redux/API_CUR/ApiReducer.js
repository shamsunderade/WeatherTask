import { FETCH_CUR_API_FAILURE, FETCH_CUR_API_REQUEST, FETCH_CUR_API_SUCCESS } from "./Current_ApiActionTypes";


const initialState={
    data:[],
    loading:false,
    error:'error while fetching the data'
}

const currentApiReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_CUR_API_REQUEST:return {
            ...state,loading:true,error:''
        }
        case FETCH_CUR_API_SUCCESS:return{
            ...state,loading:false,data:action.payload,error:''
        }
        case FETCH_CUR_API_FAILURE:return{
            ...state,loading:false , error:action.payload,data:[]
        }
        default : return state
    }
}

export default currentApiReducer