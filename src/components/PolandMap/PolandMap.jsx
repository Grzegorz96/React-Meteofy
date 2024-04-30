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
import { polishCities } from "../../utils/constants/polishCitiesData";
import { useSpring } from "@react-spring/web";
import { openWeatherModal } from "../ui/modals/WeatherModal/WeatherModal";

export default function PolandMap({ fetchedCitiesData }) {
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
                    const cityData = polishCities.find(
                        (city) => currentCity.id === city.id
                    );
                    return (
                        <MapItem
                            key={currentCity.id}
                            $left={cityData?.left}
                            $top={cityData?.top}
                        >
                            <DataWrapper>
                                <Temp>
                                    {Math.round(currentCity.main.temp)}°
                                </Temp>
                                <WeatherIcon
                                    $icon={currentCity.weather[0].icon}
                                />
                            </DataWrapper>
                            <Text>{cityData?.name}</Text>
                        </MapItem>
                    );
                })}
            </MapItemsLayer>
            <PolandMapSVG style={extensionAnimation} onClick={handleClick} />
        </MapContainer>
    );
}
