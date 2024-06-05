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

export const openWeatherModal = (city, theme) => {
    const MySwal = withReactContent(Swal);

    MySwal.fire({
        width: "400px",
        background: theme.secondary,
        heightAuto: false,
        iconHtml: <WeatherIcon $icon={city?.weather?.[0]?.icon} />,
        title: (
            <>
                <Title $theme={theme}>
                    {`${city?.name ?? "Error"} ${Math.round(
                        city?.main?.temp ?? 0
                    )}°C`}
                </Title>
                <Paragraph $theme={theme}>
                    {city?.weather?.[0]?.description}
                </Paragraph>
            </>
        ),
        html: (
            <>
                <WeatherInfo $theme={theme}>
                    feels like:
                    <WeatherInfoValue $theme={theme}>
                        {`${Math.round(city?.main?.feels_like ?? 0)}°C`}
                    </WeatherInfoValue>
                </WeatherInfo>
                <WeatherInfo $theme={theme}>
                    humidity:
                    <WeatherInfoValue $theme={theme}>
                        {`${Math.round(city?.main?.humidity ?? 0)}%`}
                    </WeatherInfoValue>
                </WeatherInfo>
                <WeatherInfo $theme={theme}>
                    wind:
                    <WeatherInfoValue $theme={theme}>
                        {`${Math.round((city?.wind?.speed ?? 0) * 3.6)}
                                 km/h`}
                    </WeatherInfoValue>
                </WeatherInfo>
                <WeatherInfo $theme={theme}>
                    pressure:
                    <WeatherInfoValue $theme={theme}>
                        {`${Math.round(city?.main?.pressure ?? 0)}
                                 hPa`}
                    </WeatherInfoValue>
                </WeatherInfo>
                <WeatherInfo $theme={theme}>
                    clouds:
                    <WeatherInfoValue $theme={theme}>
                        {`${Math.round(city?.clouds?.all ?? 0)}%`}
                    </WeatherInfoValue>
                </WeatherInfo>
            </>
        ),
        didOpen: () => {
            const confirmButton = Swal.getConfirmButton();
            if (confirmButton) confirmButton.style.color = theme.textPrimary;
        },
        customClass: {
            title: "modal-title",
            htmlContainer: "modal-html-container",
            icon: "modal-icon",
            popup: "modal-popup",
        },
    });
};

export const closeWeatherModal = () => {
    const MySwal = withReactContent(Swal);

    MySwal.close();
};
