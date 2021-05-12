import axios from "axios";

import { FETCH_API_FAILURE, FETCH_API_REQUEST, FETCH_API_SUCCESS } from "./FDTH_ApiActionTypes";

export const fetchSuccess = (dData) => ({
    type: FETCH_API_SUCCESS,
    payload:dData
})
export const fetchRequest = () => ({
    type: FETCH_API_REQUEST,
})

export const fetchFailure = (error) => ({
    type: FETCH_API_FAILURE,
    payload:error
})


export const fetchDatas =  (city) => {
   
return (dispatch)=>{
    
dispatch(fetchRequest())

axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}%20&appid=3fbb2b31fd3e77c536be64abc677a4d1`).then(res=>{
     console.log("weather data "+  res.data.list[0].weather[0].main)
    //  console.log("weather data "+  res.data.list[0].weather[0].main)
    dispatch(fetchSuccess(res.data.list))
}).catch(error=>{
dispatch(fetchFailure(error.messsage))
})
}
}


