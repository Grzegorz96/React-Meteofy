import {
    Paragraph,
    WeatherIcon,
    WeatherInfo,
    WeatherInfoValue,
    Title,
} from "./WeatherModal.styles";
import "../../../../assets/CSS/sweetAlert2Styles/weatherCityModal.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { darkTheme, lightTheme } from "../../../../utils/styles/theme";
const MySwal = withReactContent(Swal);

export const openWeatherModal = (city, isDarkMode) => {
    MySwal.fire({
        width: "400px",
        background: isDarkMode ? darkTheme.secondary : lightTheme.secondary,
        heightAuto: false,
        iconHtml: <WeatherIcon $icon={city.weather[0].icon} />,
        title: (
            <>
                <Title $isDarkMode={isDarkMode}>
                    {`${city.name} ${Math.round(city.main.temp)}°C`}
                </Title>
                <Paragraph $isDarkMode={isDarkMode}>
                    {city.weather[0].description}
                </Paragraph>
            </>
        ),
        html: (
            <>
                <WeatherInfo $isDarkMode={isDarkMode}>
                    feels like:
                    <WeatherInfoValue $isDarkMode={isDarkMode}>
                        {`${Math.round(city.main.feels_like)}°C`}
                    </WeatherInfoValue>
                </WeatherInfo>
                <WeatherInfo $isDarkMode={isDarkMode}>
                    humidity:
                    <WeatherInfoValue $isDarkMode={isDarkMode}>
                        {`${Math.round(city.main.humidity)}%`}
                    </WeatherInfoValue>
                </WeatherInfo>
                <WeatherInfo $isDarkMode={isDarkMode}>
                    wind:
                    <WeatherInfoValue $isDarkMode={isDarkMode}>
                        {`${Math.round(city.wind.speed * 3.6)}
                                 km/h`}
                    </WeatherInfoValue>
                </WeatherInfo>
                <WeatherInfo $isDarkMode={isDarkMode}>
                    pressure:
                    <WeatherInfoValue $isDarkMode={isDarkMode}>
                        {`${Math.round(city.main.pressure)}
                                 hPa`}
                    </WeatherInfoValue>
                </WeatherInfo>
                <WeatherInfo $isDarkMode={isDarkMode}>
                    clouds:
                    <WeatherInfoValue $isDarkMode={isDarkMode}>
                        {`${Math.round(city.clouds.all)}%`}
                    </WeatherInfoValue>
                </WeatherInfo>
            </>
        ),
        customClass: {
            title: "modal-title",
            htmlContainer: "modal-html-container",
            icon: "modal-icon",
            popup: "modal-popup",
        },
    });
};

export const closeWeatherModal = () => {
    MySwal.close();
};
