import { Text, Decal, useTexture, Box, useCursor } from "@react-three/drei";
import { useRef, useLayoutEffect, useState } from "react";

/**
 * @component
 * WeatherBoard component displays weather information for a specific location.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.position - The position of the weather board.
 * @param {Object} props.capital - The capital object containing weather data.
 * @param {Function} props.handleEvent - The event handler function.
 * @returns {JSX.Element} The WeatherBoard component.
 */
export default function WeatherBoard({ position, capital, handleEvent }) {
    // State to track if the weather board is hovered.
    const [hovered, setHovered] = useState(false);

    // Change cursor to pointer if the weather board is hovered.
    useCursor(hovered, "pointer");

    // Load texture for weather icon.
    const texture = useTexture(
        `/assets/openWeatherIcons/${
            capital?.weather?.[0]?.icon ?? "unknown"
        }.png`
    );

    // Reference for the weather board object.
    const weatherBoardRef = useRef();

    // Ensure the weather board always faces the camera.
    useLayoutEffect(() => {
        weatherBoardRef.current.lookAt(0, 0, 0);
    }, []);

    return (
        <Box
            ref={weatherBoardRef}
            onClick={(evt) =>
                handleEvent(evt, capital, weatherBoardRef, setHovered)
            }
            onPointerOver={(evt) =>
                handleEvent(evt, capital, weatherBoardRef, setHovered)
            }
            onPointerOut={(evt) => {
                evt.stopPropagation();
                setHovered(false);
            }}
            args={[0.12, 0.08, 0.005]}
            position={position}
            name={`weather-board-${capital?.name}`}
        >
            <meshStandardMaterial
                color={hovered ? "#1dbb25" : "#81832c"}
                transparent
                opacity={0.6}
            />
            <Decal
                layers={1}
                name="decal"
                rotation={[0, Math.PI, 0]}
                position={[-0.025, 0.01, 0]}
                scale={[0.07, 0.06, 0.01]}
                renderOrder={1}
                depthTest={true}
                depthWrite={true}
            >
                <meshBasicMaterial
                    transparent
                    polygonOffset={true}
                    polygonOffsetFactor={-1}
                    map={texture}
                />
            </Decal>
            <Text
                layers={1}
                name="temp-text"
                color={"#f6f3ea"}
                fontSize={0.025}
                maxWidth={1}
                lineHeight={0.02}
                position={[0.03, 0.008, -0.003]}
                rotation={[0, Math.PI, 0]}
            >
                {Math.round(capital?.main?.temp ?? 0)}°
            </Text>
            <Text
                layers={1}
                name="city-text"
                color={"#f6f3ea"}
                fontSize={0.018}
                maxWidth={1}
                lineHeight={0.02}
                position={[0, -0.025, -0.003]}
                rotation={[0, Math.PI, 0]}
            >
                {capital?.name ?? "Error"}
            </Text>
        </Box>
    );
}
