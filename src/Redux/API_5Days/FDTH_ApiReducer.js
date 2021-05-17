import { FETCH_API_FAILURE, FETCH_API_REQUEST, FETCH_API_SUCCESS } from "./FDTH_ApiActionTypes";


const initialState={
    data:[],
    loading:false,
    error:'error while fetching data'
}

const Five_Day_Api_Reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_API_REQUEST:return {
            ...state,loading:true,error:''
        }
        case FETCH_API_SUCCESS:return{
            ...state,loading:false,data:action.payload,error:''
        }
        case FETCH_API_FAILURE:return{
            ...state,loading:false , error:action.payload,data:[]
        }
        
        default : return state
    }
}

export default Five_Day_Api_Reducer
