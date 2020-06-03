import React,{useState} from 'react'

export default function AppBG(props) {
    const [picture, setPic] = useState({});
    if(props.weather.data !== undefined&&props.weather.data.data !== undefined){
        const CurrentWeatherDesc = props.weather?.data?.data[0]?.weather?.description||"clouds"; 
        //console.log(CurrentWeatherDesc);
        const API_KEY="LFvnkEqcPbOOlcvdABuc_sB6UQFrHos12-FS63Et1yU";
        const get_pic = async () => {
            const imgUrl = `https://api.unsplash.com/photos/random?query=${CurrentWeatherDesc}&client_id=${API_KEY}`;
            const response= await fetch(imgUrl);
            const data= await response.json();
            const urls = data.urls.regular;
            setPic(urls);
        }
    get_pic();
        const divStyle = {
            backgroundImage: 'url(' + picture + ')',
            width:100+'vw',
            height:100+'vh',
            backgroundSize:"cover",
        
        };
        return (
            <div style={divStyle}>
            {props.children}
            </div>
        )
}
    else return (
        <div>
        {props.children}
        </div>
    )
}
