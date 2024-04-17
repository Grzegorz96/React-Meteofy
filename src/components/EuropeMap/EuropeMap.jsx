import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import "../../assets/reactLeafletStyles/customMarkerIcon.css";

const BlockZoom = () => {
    const map = useMap();
    map.setMaxZoom(6); // Ustaw maksymalny zoom na 6
    map.setMinZoom(4); // Ustaw minimalny zoom na 4
    return null;
};

const customMarkerIcon = (weatherIcon) =>
    new Icon({
        iconUrl: `/src/assets/openWeatherIcons/${weatherIcon}.png`,
        iconSize: [50, 50],
        iconAnchor: [20, 65],
        popupAnchor: [0, -30],
        className: "custom-marker-icon",
    });

export default function EuropeMap({ fetchedCitiesData }) {
    console.log(fetchedCitiesData);

    return (
        <MapContainer
            dragging={true}
            center={[50, 15]}
            zoom={4}
            maxBounds={[
                [35, -25],
                [70, 45],
            ]}
            style={{
                height: "100%",
                width: "100%",
                zIndex: 0,
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
            <BlockZoom />
            {fetchedCitiesData.list.map((city, index) => (
                <Marker
                    key={index}
                    position={[city.coord.lat, city.coord.lon]}
                    icon={customMarkerIcon(city.weather[0].icon)}
                >
                    <Popup>
                        <div>
                            <h3>{city.name}</h3>
                            <p>Temperatura: {city.main.temp}&deg;C</p>
                            <p>Wilgotność: {city.main.humidity}%</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
