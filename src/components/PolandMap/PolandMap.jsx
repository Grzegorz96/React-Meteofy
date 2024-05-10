import {
    PolandMapSVG,
    MapItemsLayer,
    MapContainer,
    MapItem,
    WeatherIcon,
    Temp,
    DataWrapper,
    Text,
} from "./PolandMap.styles";
import { polishCities } from "../../utils/citiesConfig/polishCitiesData";
import { useSpring } from "@react-spring/web";
import { openWeatherModal } from "../ui/modals/WeatherModal/WeatherModal";

export default function PolandMap({ fetchedCitiesData }) {
    // console.log(fetchedCitiesData);
    // console.log(polishCities);
    const extensionAnimation = useSpring({
        from: {
            transform: "scale(0.7)",
        },
        to: async (next) => {
            await next({ transform: "scale(1.05)" });
            await next({ transform: "scale(0.95)" });
            await next({ transform: "scale(1)" });
        },
        config: {
            duration: 300,
            easing: (t) => t * (2 - t),
        },
    });

    const convertToSVGCoordinates = (latitude, longitude) => {
        // Tutaj możesz przeliczyć współrzędne geograficzne na współrzędne na mapie SVG
        // Zakładając, że mapa ma szerokość 450 i wysokość 430, a zakres współrzędnych geograficznych to np. 50-55 szerokości geograficznej i 14-24 długości geograficznej, można użyć proporcji do przeliczenia.
        const svgWidth = 450;
        const svgHeight = 430;
        const minLatitude = 50;
        const maxLatitude = 55;
        const minLongitude = 14;
        const maxLongitude = 24;

        const x =
            ((longitude - minLongitude) / (maxLongitude - minLongitude)) *
            svgWidth;
        const y =
            ((latitude - minLatitude) / (maxLatitude - minLatitude)) *
            svgHeight;

        return { x, y };
    };

    function convertGeoToPixel(
        latitude,
        longitude,
        mapWidth, // in pixels
        mapHeight, // in pixels
        mapLonLeft, // in degrees
        mapLonDelta, // in degrees (mapLonRight - mapLonLeft);
        mapLatBottom, // in degrees
        mapLatBottomDegree = mapLatBottom * (Math.PI / 180)
    ) {
        // in Radians
        var x = (longitude - mapLonLeft) * (mapWidth / mapLonDelta);

        latitude = (latitude * Math.PI) / 180;
        var worldMapWidth = ((mapWidth / mapLonDelta) * 360) / (2 * Math.PI);
        var mapOffsetY =
            (worldMapWidth / 2) *
            Math.log(
                (1 + Math.sin(mapLatBottomDegree)) /
                    (1 - Math.sin(mapLatBottomDegree))
            );
        var y =
            mapHeight -
            ((worldMapWidth / 2) *
                Math.log((1 + Math.sin(latitude)) / (1 - Math.sin(latitude))) -
                mapOffsetY);

        return { x: x, y: y };
    }

    const handleClick = (event) => {
        if (event.target.id) {
            const selectedCity = fetchedCitiesData.list.find(
                (currentCity) => event.target.id == currentCity.id
            );

            if (selectedCity) {
                openWeatherModal(selectedCity);
            }
        }
    };

    return (
        <MapContainer>
            <MapItemsLayer>
                {fetchedCitiesData.list.map((currentCity) => {
                    const xy = convertToSVGCoordinates(
                        currentCity.coord.lat,
                        currentCity.coord.lon
                    );
                    // console.log(xy);
                    // const cords = convertGeoToPixel(
                    //     currentCity.coord.lat,
                    //     currentCity.coord.lon,
                    //     450,
                    //     430,
                    //     14,
                    //     10,
                    //     50
                    // );

                    return (
                        <MapItem
                            key={currentCity.id}
                            $left={`${xy.x / 5 - 2}%`}
                            $bottom={`${xy.y / 5 + 13}%`}
                        >
                            <DataWrapper>
                                <Temp>
                                    {Math.round(currentCity.main.temp)}°
                                </Temp>
                                <WeatherIcon
                                    $icon={currentCity.weather[0].icon}
                                />
                            </DataWrapper>
                            <Text>{currentCity.name}</Text>
                        </MapItem>
                    );
                })}
            </MapItemsLayer>
            <PolandMapSVG style={extensionAnimation} onClick={handleClick} />
        </MapContainer>
    );
}
