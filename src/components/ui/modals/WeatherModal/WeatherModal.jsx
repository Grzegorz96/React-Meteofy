import {
    Paragraph,
    WeatherIcon,
    WeatherInfo,
    WeatherInfoValue,
} from "./WeatherModal.styles";
import "../../../../assets/CSS/sweetAlert2Styles/weatherCityModal.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export const openWeatherModal = (city) => {
    MySwal.fire({
        width: "400px",
        heightAuto: false,
        iconHtml: <WeatherIcon $icon={city.weather[0].icon} />,
        title: (
            <>
                {`${city.name} ${Math.round(city.main.temp)}°C`}
                <Paragraph>{city.weather[0].description}</Paragraph>
            </>
        ),
        html: (
            <>
                <WeatherInfo>
                    feels like:
                    <WeatherInfoValue>
                        {`${Math.round(city.main.feels_like)}°C`}
                    </WeatherInfoValue>
                </WeatherInfo>
                <WeatherInfo>
                    humidity:
                    <WeatherInfoValue>
                        {`${Math.round(city.main.humidity)}%`}
                    </WeatherInfoValue>
                </WeatherInfo>
                <WeatherInfo>
                    wind:
                    <WeatherInfoValue>
                        {`${Math.round(city.wind.speed * 3.6)}
                                 km/h`}
                    </WeatherInfoValue>
                </WeatherInfo>
                <WeatherInfo>
                    pressure:
                    <WeatherInfoValue>
                        {`${Math.round(city.main.pressure)}
                                 hPa`}
                    </WeatherInfoValue>
                </WeatherInfo>
                <WeatherInfo>
                    clouds:
                    <WeatherInfoValue>
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
