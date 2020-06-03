import React,{useState, useEffect,Suspense} from 'react'
//import AppBG from './AppBG'
//import WeatherBlock from './WeatherBlock'
import axios from 'axios'
import Loader from './Loader'
const AppBG= React.lazy(() => import('./AppBG'));
const WeatherBlock= React.lazy(() => import('./WeatherBlock'));
const Map= React.lazy(() => import('./Map'));
//import {Context} from './context'
//Wimport Navigation from './Navigation'


export default function Main() {
    const [geoposition, setGeo] = useState("");
    const [weatherData, getWeatherData] = useState({});
    const [navbarData, getNavBarData] = useState("");
    const [units, SetUnits] = useState("C");
    const [loaded, setLoading] = useState(false);
    const [country_code, SetCountryCode]=useState("");
    const [OpenCageData, SetOpenCageData]=useState({});
   
    const values = (e) => {
         const city = document.getElementById('search').value; 
        getNavBarData(city);
        setLoading(false);
        e.preventDefault();
    }
    const get_geo = async() =>{
        const API_KEY="a954ec36a1d28d";
        const geo = `https://ipinfo.io/json?token=${API_KEY}`;
        const response = await fetch(geo);
        const data = await response.json();
        const city = data.city;
        setGeo(city);
    }
    const get_weather = async(city,country) =>{
        setLoading(true);
        const table={C:"M",F:"I"};
        const API_KEY="563fb5deb64544f7858183b050eba696";
        const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&units=${table[units]}&key=${API_KEY}`;
        const response=axios.get(url);
        const data= await response;
        //console.log(data);
        
        //WeatherData=data;
        //console.log("Weater for:"+ city);
        getWeatherData(data);
        
    }
    const get_openCage = async(city) =>{
        const API_KEY="57802ff5b089417a8745e82233537ee8";
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&language=en&key=${API_KEY}`;
        const response=axios.get(url);
        const data= await response;
        SetCountryCode(data?.data?.results[0]?.components?.country_code);
        SetOpenCageData(data?.data?.results[0]);
        //console.log(data.data);
 }
   const cityToSearch = navbarData !== "" ? navbarData : geoposition;
    useEffect(()=>{ 
        
        if(geoposition === "")
        get_geo();

        if(geoposition !== ""&&loaded===false){
         get_openCage(cityToSearch);
         if(country_code!=="")
         get_weather(cityToSearch,country_code);
        // SetCountryCode("");
           
        }
        
    })
    if(geoposition !== ""&&country_code !== ""&&weatherData?.data !== undefined){
            
    return (
        <Suspense  fallback={<Loader/>}>
       <AppBG weather={weatherData}>
                    <div className="Main">
                    <div className="navigation-block"> 
                <div className="weather-nav">
                    <button className="reload" onClick={event =>{setLoading(false)}}></button>
                    <select name="lang" id="lang">
                        <option value="en">EN</option>
                        <option value="ru">RU</option>
                        <option value="be">BE</option>
                    </select>
                    <select name="tempType" id="tempType" onChange={event => {SetUnits(event.target.value);setLoading(false);}}>
                        <option value="C">°C</option>
                        <option value="F">°F</option>
                    </select>
                </div>
                <div className="weather-search">
                    <form className="weather-search--form" onSubmit={values}>
                        <input placeholder="Search by city" autoComplete="off" name="city" className="weather-search--input" type="text" id="search"/>
                        <button className="weather-search--button" >&rarr;</button>
                    </form>
                </div>
            </div>
             <div className="weatherAndMap">
             <Suspense  fallback={<Loader/>}> <WeatherBlock weather={weatherData} OpenCageData={OpenCageData} load={setLoading}/></Suspense>
             <Suspense  fallback={<Loader/>}>  <Map OpenCageData={OpenCageData}/></Suspense>
            </div>  
              
            </div>
       </AppBG>  
       </Suspense> 
    )}
    else
    return <Loader/>;
}
// <Weather city = {cityToSearch} passWeatherData={getWeatherData} load={setLoading} loaded={loaded}/>