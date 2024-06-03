import { useEffect, memo } from "react";
import { useThree } from "@react-three/fiber";
import { useTexture, Sphere } from "@react-three/drei";
import { useTheme } from "styled-components";
import WeatherBoard from "./WeatherBoard";
import {
    openWeatherModal,
    closeWeatherModal,
} from "../ui/modals/WeatherModal/WeatherModal";
import EarthDayMap from "../../assets/textures/8k-earth-day-map.jpg";
import EarthCloudsMap from "../../assets/textures/8k-earth-clouds.jpg";
import NormalMap from "../../assets/textures/8k-earth-normal-map.jpg";
import SpecularMap from "../../assets/textures/8k-earth-specular-map.jpg";
import { worldCapitalsOffset } from "../../utils/citiesConfig/worldCapitalsOffset";
import { convertLatLonToCartesian } from "../../utils/formatting";

function Earth({ fetchedCitiesData, setIsLoading }) {
    const theme = useTheme();
    const { camera, raycaster, pointer, scene } = useThree();
    const [colorMap, cloudsMap, normalMap, specularMap] = useTexture([
        EarthDayMap,
        EarthCloudsMap,
        NormalMap,
        SpecularMap,
    ]);

    useEffect(() => {
        return () => {
            closeWeatherModal();
        };
    }, [theme]);

    useEffect(() => {
        camera.layers.enable(1);
        setIsLoading(false);
    }, []);

    const setOffset = (capital) => {
        const cityToOffset = worldCapitalsOffset.find(
            (city) => city.id === capital.id
        );
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

    function handleEvent(evt, capital, weatherBoardRef, setHovered) {
        evt.stopPropagation();
        raycaster.setFromCamera(pointer, camera);
        const intersects = raycaster.intersectObjects(scene.children, true);
        if (
            intersects.length > 0 &&
            intersects[0].object === weatherBoardRef.current
        ) {
            if (evt.type === "click") {
                openWeatherModal(capital, theme);
            } else if (evt.type === "pointermove") {
                setHovered(true);
            }
        }
    }

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
                        handleEvent={handleEvent}
                    />
                ))}
            </Sphere>
        </group>
    );
}

export default memo(Earth);
