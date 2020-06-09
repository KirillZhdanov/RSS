import React,{useState,useEffect,useRef} from 'react'
import mapboxgl from 'mapbox-gl';
const styles = {
    width: "300px",
    height: "300px",
    
  };
export default function Map(props) {
  const [map, setMap] = useState(null);
  const [latitude, setLatitude] = useState("");
  const mapContainer = useRef(null);
  const lat=props.OpenCageData?.geometry?.lat||"27.5618791";
  const lon=props.OpenCageData?.geometry?.lng||"53.902334";
  
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic2VuYXIiLCJhIjoiY2theHJ0azQyMDk0MDJybmlqdm9reTY2ZCJ9.rlf7AjtlmU6aNOx_-y_V4Q";
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", 
        center: [lon,lat],
        zoom: 10,
      });
    new mapboxgl.Marker().setLngLat([lon,lat]).addTo(map);

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };
    if(latitude===""||latitude!==lat)
    setLatitude(lat);
  useEffect(() => {
    if(map)map.remove();
  initializeMap({ setMap, mapContainer });
  
  }, [latitude]);

  return <div ref={el => (mapContainer.current = el)} style={styles} />;
    
}
