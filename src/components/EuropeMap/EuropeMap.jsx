import { useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { divIcon } from "leaflet";
import { WeatherIcon, Temp } from "./EuropeMap.styles";
import MarkerClusterGroup from "react-leaflet-cluster";
import { renderToString } from "react-dom/server";
import "leaflet/dist/leaflet.css";
import "../../assets/CSS/reactLeafletStyles/customMarkerIcon.css";
import {
    openWeatherModal,
    closeWeatherModal,
} from "../ui/modals/WeatherModal/WeatherModal";
import { useTheme } from "styled-components";

export default function EuropeMap({ fetchedCitiesData }) {
    const theme = useTheme();

    useEffect(() => {
        return () => {
            closeWeatherModal();
        };
    }, [theme]);

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
            contro
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
                url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${
                    import.meta.env.VITE_OPEN_WEATHER_API_KEY
                }`}
            />
            <MarkerClusterGroup
                chunkedLoading={true}
                showCoverageOnHover={false}
            >
                {fetchedCitiesData.list.map((city) => (
                    <Marker
                        eventHandlers={{
                            click: () => openWeatherModal(city, theme),
                            keydown: (e) => {
                                if (e.originalEvent.key === "Enter") {
                                    e.originalEvent.preventDefault();
                                    openWeatherModal(city, theme);
                                }
                            },
                        }}
                        key={city.id}
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
