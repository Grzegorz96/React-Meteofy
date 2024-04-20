import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { divIcon } from "leaflet";
import {
    WeatherIcon,
    Temp,
    Paragraph,
    WeatherInfo,
    WeatherInfoValue,
} from "./EuropeMap.styles";
import MarkerClusterGroup from "react-leaflet-cluster";
import { renderToString } from "react-dom/server";
import "leaflet/dist/leaflet.css";
import "../../assets/reactLeafletStyles/customMarkerIcon.css";
import "../../assets/sweetAlert2Styles/weatherCityModal.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

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
    const handleClick = (city) => {
        MySwal.fire({
            width: "400px",
            heightAuto: false,
            iconHtml: <WeatherIcon $icon={city.weather[0].icon} />,
            title: (
                <>
                    {`${city.name} ${Math.round(city.main.temp)}°C`}
                    <Paragraph>{city.weather[0].description}</Paragraph>
                </>
            ),
            html: (
                <>
                    <WeatherInfo>
                        feels like:
                        <WeatherInfoValue>
                            {`${Math.round(city.main.feels_like)}°C`}
                        </WeatherInfoValue>
                    </WeatherInfo>
                    <WeatherInfo>
                        humidity:
                        <WeatherInfoValue>
                            {`${Math.round(city.main.humidity)}%`}
                        </WeatherInfoValue>
                    </WeatherInfo>
                    <WeatherInfo>
                        wind:
                        <WeatherInfoValue>
                            {`${Math.round(city.wind.speed * 3.6)}
                                     km/h`}
                        </WeatherInfoValue>
                    </WeatherInfo>
                    <WeatherInfo>
                        pressure:
                        <WeatherInfoValue>
                            {`${Math.round(city.main.pressure)}
                                     hPa`}
                        </WeatherInfoValue>
                    </WeatherInfo>
                    <WeatherInfo>
                        clouds:
                        <WeatherInfoValue>
                            {`${Math.round(city.clouds.all)}%`}
                        </WeatherInfoValue>
                    </WeatherInfo>
                </>
            ),
            customClass: {
                title: "modal-title",
                htmlContainer: "modal-html-container",
                icon: "modal-icon",
            },
        });
    };

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
            <MarkerClusterGroup
                chunkedLoading={true}
                showCoverageOnHover={false}
            >
                {fetchedCitiesData.list.map((city, index) => (
                    <Marker
                        eventHandlers={{ click: () => handleClick(city) }}
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
