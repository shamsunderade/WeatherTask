import axios from "axios";
import { FETCH_CUR_API_FAILURE, FETCH_CUR_API_REQUEST, FETCH_CUR_API_SUCCESS } from "./Current_ApiActionTypes";

export const fetchSuccess = (curData) => ({
    type: FETCH_CUR_API_SUCCESS,
    payload:curData
})
export const fetchRequest = () => ({
    type: FETCH_CUR_API_REQUEST,
})

export const fetchFailure = (error) => ({
    type: FETCH_CUR_API_FAILURE,
    payload:error
})


export const fetchData = (city) => {
    
return (dispatch)=>{
dispatch(fetchRequest())
axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}%20&appid=3fbb2b31fd3e77c536be64abc677a4d1`).then(res=>{
    console.log(res)
    dispatch(fetchSuccess(res.data.weather))
}).catch(error=>{
dispatch(fetchFailure(error.messsage))
})
}
}


