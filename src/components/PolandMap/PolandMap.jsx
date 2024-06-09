import { useEffect } from "react";
import {
    PolandMapSVG,
    MapItem,
    WeatherIcon,
    Temp,
    DataWrapper,
    Text,
} from "./PolandMap.styles";
import { useSpring } from "@react-spring/web";
import {
    openWeatherModal,
    closeWeatherModal,
} from "../ui/modals/WeatherModal/WeatherModal";
import { polishCitiesData } from "../../utils/citiesConfig/polishCitiesData";
import { useTheme } from "styled-components";

/**
 * @component
 * Renders a map of Poland with interactive voivodeship paths.
 *
 * @param {Object} props - Component props.
 * @param {Object[]} props.fetchedCitiesData - An array of city data fetched from an API.
 * @returns {JSX.Element} The rendered component.
 */
export default function PolandMap({ fetchedCitiesData }) {
    // Get the current theme from styled-components.
    const theme = useTheme();

    // Close weather modal when theme changes and when unmounting component.
    useEffect(() => {
        return () => {
            closeWeatherModal();
        };
    }, [theme]);

    // Animation for the map.
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
                <g>
                    {fetchedCitiesData?.map((currentCity) => {
                        // Find city data from polishCitiesData by matching the id.
                        const cityData = polishCitiesData.find(
                            (polishCity) => polishCity.id === currentCity?.id
                        );

                        // Render path element for each city if city data is found.
                        if (cityData) {
                            return (
                                <path
                                    tabIndex={0}
                                    key={cityData.id}
                                    id={cityData.id}
                                    title={cityData.title}
                                    d={cityData.d}
                                    onClick={() =>
                                        openWeatherModal(currentCity, theme)
                                    }
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault();
                                            openWeatherModal(
                                                currentCity,
                                                theme
                                            );
                                        }
                                    }}
                                />
                            );
                        }
                    })}
                </g>
                <g>
                    {fetchedCitiesData?.map((currentCity) => {
                        // Find city data from polishCitiesData by matching the id.
                        const cityData = polishCitiesData.find(
                            (polishCity) => polishCity.id === currentCity?.id
                        );

                        // Render weather information for each city if city data is found.
                        if (cityData) {
                            return (
                                <foreignObject
                                    key={cityData.id}
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
                                                    currentCity?.main?.temp ?? 0
                                                )}
                                                °
                                            </Temp>
                                            <WeatherIcon
                                                $icon={
                                                    currentCity?.weather?.[0]
                                                        ?.icon
                                                }
                                            />
                                        </DataWrapper>
                                        <Text>
                                            {currentCity?.name ?? "Error"}
                                        </Text>
                                    </MapItem>
                                </foreignObject>
                            );
                        }
                    })}
                </g>
            </PolandMapSVG>
        </>
    );
}
