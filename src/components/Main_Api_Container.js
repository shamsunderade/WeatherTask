import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchDatas } from '../Redux/API_5Days/FDTH_Api_Action'
import { fetchData } from '../Redux/API_CUR/Current_ApiActions'
import TEMP from '../images/temp.png'
import COLD from '../images/cold.png'
import HUMIDITY from '../images/humidity.png'
import CLOUD1 from '../images/cloud-computing.png'
import WIND from '../images/wind-11.png'
import WINDENERGY from '../images/wind-energy.png'

function Main_Api_Container() {
    // const state = useSelector(state =>state.curApi.data)

    const s = useSelector((state) => state)

   
    const dispatch = useDispatch()
    const dispatch1 = useDispatch()

    const [city, setCity] = useState('pune')
     

    let onchangecity = (e) => {
        console.log(e.target.value)
        setCity(e.target.value)
      

        dispatch(fetchDatas(city))
        dispatch1(fetchData(city))

    }

    useEffect(() => {
        dispatch1(fetchData(city))
        dispatch(fetchDatas(city))


    }, [])

    return (
        <>
            <div>
                <form className="form1 pb-5"  >
                    <h5>Select City</h5>

                    <select value={city} id="browsers" onChange={onchangecity}>
                        <option value="mumbai" >mumbai</option>
                        <option value="pune" >pune</option>

                        <option value="chennai" >chennai</option>

                        <option value="parbhani" >parbhani</option>
                    </select>
                </form>
            </div>

            {s.current_Api.loading ?
                <Spinner animation="border" className="spi" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>

                : s.current_Api.error ? s.current_Api.error :

                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 card-body shadow DisplayCol special-card" >
                                {/* Current_weather_Api_data_fetching */}
                                {
                                    s.current_Api.data !== null && s.current_Api.data.map(obj => {

                                        return (
                                            <>

                                                <div>
                                                    <div>id : {obj.id} </div>
                                                    <div>main: {obj.main}</div>
                                                    <div> description:{obj.description} </div>
                                                    <div>icon: <img src={`http://openweathermap.org/img/wn/${obj.icon}@2x.png`} /></div>
                                                </div>

                                            </>
                                        )
                                    })
                                }



                               
                            </div>

                            <div className="col-md-4 card-body shadow  DisplayCol">
                                    {/* 5day_weather_forecast_data_fetching */}
                                {

                                    s.day_5_Api.data.map((e) => {
                                        return (
                                            <div>
                                                {/* <div>id : {e.clouds.all} </div> */}
                                                <div ><img src={`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`} /><h3 className="temp_1"> {e.main.temp}°</h3> C  {e.weather[0].main}</div>
                                                <div><img src={COLD} /> temp: {e.main.temp}°C   <img src={HUMIDITY} /> humidity: {e.main.humidity} %</div>
                                                <div></div>
                                                <div><img src={CLOUD1} />  {e.weather[0].description}</div>
                                                <div><img src={WIND} /> wind_deg: {e.wind.deg} </div>
                                                <div> <img src={WINDENERGY} />wind_speed: {e.wind.speed} </div>
                                            </div>
                                        )
                                    })}

                            {/* 5day_weather_forecast_data_fetching */}
                                {


                                    s.day_5_Api.data.map((e) => {

                                        return e.weather.map((obj) => {

                                            return (
                                                <div>
                                                    {/* <div>id:- {obj.id} </div> */}
                                                    <div>main:- {obj.main}</div>
                                                    <div> description:-{obj.description} </div>
                                                    <div>icon:- <img src={`http://openweathermap.org/img/wn/${obj.icon}@2x.png`} /></div>
                                                </div>


                                            )
                                        })
                                    })

                                }



                            </div>

                            
                        </div>

                    </div>


            }






        </>
    )
}

export default Main_Api_Container

