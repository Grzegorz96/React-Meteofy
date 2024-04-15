import {
    PolandMapSVG,
    MapItemsLayer,
    MapContainer,
    MapItem,
    WeaterIcon,
    Temp,
    DataWrapper,
    Text,
} from "./PolandMap.styles";
import { polishCitiesData } from "../../utils/constants/polishCitiesData";
import Swal from "sweetalert2";
import "../../assets/sweetAlert2Styles/cityPopup.css";

export default function PolandMap({ fetchedCitiesData }) {
    const handleClick = (event) => {
        if (event.target.id) {
            const clickedCity = fetchedCitiesData.list.find(
                (currentCity) => event.target.id === currentCity.id.toString()
            );

            if (clickedCity) {
                Swal.fire({
                    heightAuto: false,
                    iconHtml: `<img src="src/assets/openWeatherIcons/${clickedCity.weather[0].icon}.png" alt="icon" />`,
                    title: `<h3>${
                        polishCitiesData.find(
                            (city) => clickedCity.id === city.id
                        )?.name
                    }  ${Math.round(clickedCity.main.temp)}°C</h3><p>${
                        clickedCity.weather[0].description
                    }</p>`,
                    html: ` <div class="popup-weather-info">feels like:<span>${Math.round(
                        clickedCity.main.feels_like
                    )}°C</span></div>
                    <div class="popup-weather-info">humidity:<span>${Math.round(
                        clickedCity.main.humidity
                    )}%</span></div>
                    <div class="popup-weather-info">wind:<span>${Math.round(
                        clickedCity.wind.speed * 3.6
                    )} km/h</span></div>
                    <div class="popup-weather-info">pressure:<span>${Math.round(
                        clickedCity.main.pressure
                    )} hPa</span></div>
                    <div class="popup-weather-info">clouds:<span>${Math.round(
                        clickedCity.clouds.all
                    )}%</span></div>`,

                    customClass: {
                        title: "popup-title",
                        htmlContainer: "popup-html-container",
                        popup: "popup-container",
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
            <PolandMapSVG onClick={handleClick} />
        </MapContainer>
    );
}
