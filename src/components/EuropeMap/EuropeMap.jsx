import { useEffect } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { divIcon } from "leaflet";
import { WeatherIcon, Temp } from "./EuropeMap.styles";
import MarkerClusterGroup from "react-leaflet-cluster";
import { renderToString } from "react-dom/server";
import "leaflet/dist/leaflet.css";
import "../../assets/CSS/reactLeafletStyles/customMarkerIcon.css";
import "../../assets/CSS/reactLeafletStyles/customControlZoom.css";
import {
    openWeatherModal,
    closeWeatherModal,
} from "../ui/modals/WeatherModal/WeatherModal";
import { useTheme } from "styled-components";

export default function EuropeMap({ fetchedCitiesData }) {
    const theme = useTheme();

    useEffect(() => {
        const mapContainer = document.querySelector(".leaflet-container");

        mapContainer.style.setProperty(
            "--elements-background-color",
            theme.isDarkMode
                ? "rgba(0, 0, 0, 0.75)"
                : "rgba(255, 255, 255, 0.75)"
        );

        mapContainer.style.setProperty(
            "--elements-hover-background-color",
            theme.backgroundFocus
        );

        mapContainer.style.setProperty("--elements-color", theme.textPrimary);

        return () => {
            closeWeatherModal();
        };
    }, [theme]);

    const customMarker = (weatherIcon, temperature) => {
        return divIcon({
            className: "marker-icon",
            iconSize: [60, 40],
            iconAnchor: [30, 60],
            html: renderToString(
                <>
                    <Temp>{Math.round(temperature)}°</Temp>
                    <WeatherIcon $icon={weatherIcon} />
                </>
            ),
        });
    };

    return (
        <MapContainer
            style={{
                height: "100%",
                width: "100%",
                position: "absolute",
                top: "0",
                left: "0",
                overflow: "hidden",
            }}
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
                {fetchedCitiesData?.map((city, index) => (
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
                        key={city?.id ?? index}
                        position={[
                            city?.coord?.lat ?? 0,
                            city?.coord?.lon ?? 0,
                        ]}
                        icon={customMarker(
                            city?.weather?.[0]?.icon,
                            city?.main?.temp ?? 0
                        )}
                    />
                ))}
            </MarkerClusterGroup>
        </MapContainer>
    );
}
