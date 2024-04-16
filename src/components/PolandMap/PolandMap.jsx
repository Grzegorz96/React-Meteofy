import {
    PolandMapSVG,
    MapItemsLayer,
    MapContainer,
    MapItem,
    WeaterIcon,
    Temp,
    DataWrapper,
    Text,
    Paragraph,
    WeatherInfo,
    WeatherInfoValue,
} from "./PolandMap.styles";
import { polishCitiesData } from "../../utils/constants/polishCitiesData";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "../../assets/sweetAlert2Styles/cityPopup.css";
import { useSpring } from "@react-spring/web";
const MySwal = withReactContent(Swal);

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
            const clickedCity = fetchedCitiesData.list.find(
                (currentCity) => event.target.id === currentCity.id.toString()
            );

            if (clickedCity) {
                MySwal.fire({
                    width: "400px",
                    heightAuto: false,
                    iconHtml: (
                        <WeaterIcon
                            $icon={clickedCity.weather[0].icon}
                            $width="100%"
                        />
                    ),
                    title: (
                        <>
                            {`${
                                polishCitiesData.find(
                                    (city) => clickedCity.id === city.id
                                )?.name
                            }  ${Math.round(clickedCity.main.temp)}°C`}
                            <Paragraph>
                                {clickedCity.weather[0].description}
                            </Paragraph>
                        </>
                    ),
                    html: (
                        <>
                            <WeatherInfo>
                                feels like:
                                <WeatherInfoValue>
                                    {`${Math.round(
                                        clickedCity.main.feels_like
                                    )}°C`}
                                </WeatherInfoValue>
                            </WeatherInfo>
                            <WeatherInfo>
                                humidity:
                                <WeatherInfoValue>
                                    {`${Math.round(
                                        clickedCity.main.humidity
                                    )}%`}
                                </WeatherInfoValue>
                            </WeatherInfo>
                            <WeatherInfo>
                                wind:
                                <WeatherInfoValue>
                                    {`${Math.round(
                                        clickedCity.wind.speed * 3.6
                                    )}
                                     km/h`}
                                </WeatherInfoValue>
                            </WeatherInfo>
                            <WeatherInfo>
                                pressure:
                                <WeatherInfoValue>
                                    {`${Math.round(clickedCity.main.pressure)}
                                     hPa`}
                                </WeatherInfoValue>
                            </WeatherInfo>
                            <WeatherInfo>
                                clouds:
                                <WeatherInfoValue>
                                    {`${Math.round(clickedCity.clouds.all)}%`}
                                </WeatherInfoValue>
                            </WeatherInfo>
                        </>
                    ),
                    customClass: {
                        title: "popup-title",
                        htmlContainer: "popup-html-container",
                        icon: "popup-icon",
                    },
                });
            }
        }
    };

    return (
        <MapContainer>
            <MapItemsLayer>
                {fetchedCitiesData.list.map((currentCity) => {
                    const cityData = polishCitiesData.find(
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
                                    {Math.round(currentCity.main.temp)}°C
                                </Temp>
                                <WeaterIcon
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
