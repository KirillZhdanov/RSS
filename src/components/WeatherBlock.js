import React,{useState} from 'react'
import Loader from './Loader'
import { useTranslation } from 'react-i18next';

export default function WeatherBlock(props) {
    const [loaded, setLoading] = useState(false);
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const currentDayTemp = props.weather.data.data !== undefined ? props.weather.data.data[0]?.temp : 0;
    const currentDayIcon = props.weather.data.data !== undefined ? props.weather.data.data[0]?.weather.icon : "t01d";
    const currentDayHum = props.weather.data.data !== undefined ? props.weather.data.data[0]?.rh : 0;
    const currentDayOfWeek = days[(new Date(props.weather.data.data !== undefined ?props.weather?.data?.data[0]?.datetime:"2020-06-02")).getDay()];
    const threeDaysWeather = [];
    const { t } = useTranslation();
    
    for(let i=1;i<=3;i++){
        threeDaysWeather.push({
            temp: props.weather.data.data !== undefined ? props.weather?.data?.data[i]?.temp:0,
            icon: props.weather.data.data !== undefined ?props.weather?.data?.data[i]?.weather?.icon:"t01d",
            dayOfWeek:props.weather.data.data !== undefined ?days[(new Date(props.weather.data !== undefined ?props.weather?.data?.data[i]?.datetime:"2020-06-02")).getDay()]:days[i],
            key:i
        });
    }
    if(props.weather?.data?.data !== undefined){     
    return (
        <div className="Weather">
            <h2>{props.OpenCageData.formatted}</h2>
        <div className="TodayBlockFull">
            <div className="TodayBlock">
                <h4>{t(currentDayOfWeek)}</h4>
                <div className="Today">
                    <p className="currentWeatherTemperature">{currentDayTemp}°</p>
                    <div className="weatherIcon" style={{backgroundImage:"url(https://www.weatherbit.io/static/img/icons/"+currentDayIcon+".png)"}}></div>
                </div>
            </div>
            <div className="TodayBlockExtra">
            <p>{t(props.weather.data.data !== undefined?props.weather?.data?.data[0]?.weather?.description:"Rain")}</p>
                <p>{t("Feels like")} {props.weather.data.data !== undefined?props.weather?.data?.data[0]?.app_min_temp:0}°</p>
                <p>{t("Humidity")} {currentDayHum}%</p>
            </div>
        </div>
        <div  className="threeDaysWeather">
    {threeDaysWeather.map((weather,index) => (
        <div className="dayWeatherBlock" key={weather.key}>
            <h4>{t(weather.dayOfWeek)}</h4>
            <div className="dayWeather">
            <p>{weather.temp}°</p>
            <div className="weatherIcon" style={{backgroundImage:"url(https://www.weatherbit.io/static/img/icons/"+weather.icon+".png)"}}></div>
            </div>
        </div>
    ))}
    </div>
    </div>
    )}
    else{
        
        if(loaded === false){
        props.load(true);
        setLoading(true);
    }
        return <Loader/>
    }
}
