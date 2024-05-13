import {
    PolandMapSVG,
    MapItem,
    WeatherIcon,
    Temp,
    DataWrapper,
    Text,
} from "./PolandMap.styles";
import { useSpring } from "@react-spring/web";
import { openWeatherModal } from "../ui/modals/WeatherModal/WeatherModal";
import { polishCitiesData } from "../../utils/citiesConfig/polishCitiesData";

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

    return (
        <>
            <PolandMapSVG
                style={extensionAnimation}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 440 420"
                preserveAspectRatio="xMidYMid meet"
            >
                {fetchedCitiesData.list.map((currentCity) => {
                    const cityData = polishCitiesData.find(
                        (polishCity) => polishCity.id === currentCity.id
                    );

                    if (cityData) {
                        return (
                            <g key={cityData.id}>
                                <path
                                    id={cityData.id}
                                    title={cityData.title}
                                    d={cityData.d}
                                    onClick={() =>
                                        openWeatherModal(currentCity)
                                    }
                                />
                                <foreignObject
                                    style={{
                                        pointerEvents: "none",
                                    }}
                                    x={cityData.left}
                                    y={cityData.top}
                                    width="65"
                                    height="55"
                                >
                                    <MapItem>
                                        <DataWrapper>
                                            <Temp>
                                                {Math.round(
                                                    currentCity.main.temp
                                                )}
                                                °
                                            </Temp>
                                            <WeatherIcon
                                                $icon={
                                                    currentCity.weather[0].icon
                                                }
                                            />
                                        </DataWrapper>
                                        <Text>{currentCity.name}</Text>
                                    </MapItem>
                                </foreignObject>
                            </g>
                        );
                    }
                })}
            </PolandMapSVG>
        </>
    );
}
