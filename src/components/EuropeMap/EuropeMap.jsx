import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { divIcon } from "leaflet";
import { WeatherIcon, Temp } from "./EuropeMap.styles";
import MarkerClusterGroup from "react-leaflet-cluster";
import { renderToString } from "react-dom/server";
import { API_DATA } from "../../utils/constants/api/openWeatherApiData";
import "leaflet/dist/leaflet.css";
import "../../assets/reactLeafletStyles/customMarkerIcon.css";
import { openWeatherModal } from "../ui/modals/WeatherModal/WeatherModal";

const customMarker = (weatherIcon, temperature) =>
    divIcon({
        className: "custom-marker-icon",
        iconSize: [60, 40],
        iconAnchor: [30, 60],
        html: renderToString(
            <>
                <Temp>{Math.round(temperature)}°</Temp>
                <WeatherIcon $icon={weatherIcon} />
            </>
        ),
    });

export default function EuropeMap({ fetchedCitiesData }) {
    return (
        <MapContainer
            minZoom={4}
            maxZoom={13}
            dragging={true}
            center={[50, 15]}
            zoom={4}
            maxBounds={[
                [35, -25],
                [70, 45],
            ]}
            maxBoundsViscosity={1.0}
            style={{
                zIndex: 1,
                height: "100%",
                width: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                overflow: "hidden",
            }}
        >
            <TileLayer
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}"
                attribution="&copy; Esri &mdash; Source: Esri"
            />
            <TileLayer
                url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_DATA.apiKey}`}
            />
            <MarkerClusterGroup
                chunkedLoading={true}
                showCoverageOnHover={false}
            >
                {fetchedCitiesData.list.map((city, index) => (
                    <Marker
                        eventHandlers={{ click: () => openWeatherModal(city) }}
                        key={index}
                        position={[city.coord.lat, city.coord.lon]}
                        icon={customMarker(
                            city.weather[0].icon,
                            city.main.temp
                        )}
                    ></Marker>
                ))}
            </MarkerClusterGroup>
        </MapContainer>
    );
}
