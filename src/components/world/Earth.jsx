import { convertLatLonToCartesian } from "../../utils/formatting";
import WeatherBoard from "./WeatherBoard";
import { useTexture, Sphere } from "@react-three/drei";
import EarthDayMap from "../../assets/textures/8k-earth-day-map.jpg";
import EarthCloudsMap from "../../assets/textures/8k-earth-clouds.jpg";
import NormalMap from "../../assets/textures/8k-earth-normal-map.jpg";
import SpecularMap from "../../assets/textures/8k-earth-specular-map.jpg";
import { useEffect } from "react";
import { offsetlist } from "../../utils/constants/offsetlist";
import { useThree } from "@react-three/fiber";

import "../../assets/sweetAlert2Styles/weatherCityModal.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import {
    WeatherIcon,
    Temp,
    Paragraph,
    WeatherInfo,
    WeatherInfoValue,
} from "../EuropeMap/EuropeMap.styles";

export default function Earth({ fetchedCitiesData }) {
    const [colorMap, cloudsMap, normalMap, specularMap] = useTexture([
        EarthDayMap,
        EarthCloudsMap,
        NormalMap,
        SpecularMap,
    ]);

    const { camera, raycaster } = useThree();

    useEffect(() => {
        camera.layers.enable(1);
    }, []);

    const setOffset = (capital) => {
        const cityToOffset = offsetlist.find((city) => city.id === capital.id);
        return convertLatLonToCartesian(
            cityToOffset?.lat
                ? capital.coord.lat + cityToOffset.lat
                : capital.coord.lat,

            cityToOffset?.lon
                ? capital.coord.lon + cityToOffset.lon
                : capital.coord.lon,
            3.01
        );
    };

    const handleClick = (city) => {
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
            },
        });
    };

    return (
        <group>
            <Sphere args={[3.005, 128, 128]} name="clouds">
                <meshPhongMaterial
                    map={cloudsMap}
                    transparent={true}
                    opacity={0.4}
                    depthWrite={true}
                />
            </Sphere>
            <Sphere args={[3, 128, 128]} name="earth">
                <meshPhongMaterial specularMap={specularMap} />
                <meshStandardMaterial
                    normalMap={normalMap}
                    map={colorMap}
                    metalness={0.3}
                    roughness={0.7}
                />
                {fetchedCitiesData.list.map((capital) => (
                    <WeatherBoard
                        key={capital.id}
                        position={setOffset(capital)}
                        capital={capital}
                        raycaster={raycaster}
                        handleClick={handleClick}
                    />
                ))}
            </Sphere>
        </group>
    );
}
