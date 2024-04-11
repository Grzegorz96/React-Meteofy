import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import countries from "../../utils/geoData/countries.json";

export default function PolandMap() {
    const countryStyle = {
        fillColor: "red",
        fillOpacity: 1,
        color: "black",
        weight: 2,
    };

    const onEachCountry = (country, layer) => {
        const countryName = country.properties.ADMIN;
        layer.bindPopup(countryName);
        // layer.options.fillOpacity = Math.random();
        layer.on({
            click: changeCountryColor,
        });
    };

    const changeCountryColor = (event) => {
        event.target.setStyle({
            color: "yellow",
            fillColor: "green",
        });
    };

    return (
        <MapContainer
            zoomControl={false}
            center={[39, 34]}
            zoom={2}
            style={{
                height: "100vh",
                width: "100%",
                border: "1px solid black",
                backgroundColor: "white",
            }}
            scrollWheelZoom={false}
            dragging={false}
        >
            <GeoJSON
                style={countryStyle}
                data={countries.features}
                onEachFeature={onEachCountry}
            />
            {/* <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            /> */}
            {/* <Marker position={[52, 20]}>
                <Popup>Centrum Polski</Popup>
            </Marker> */}
        </MapContainer>
    );
}
