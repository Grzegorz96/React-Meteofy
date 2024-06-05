import { Text, Decal, useTexture, Box, useCursor } from "@react-three/drei";
import { useRef, useLayoutEffect, useState } from "react";

export default function WeatherBoard({ position, capital, handleEvent }) {
    const [hovered, setHovered] = useState(false);
    useCursor(hovered, "pointer");
    const texture = useTexture(
        `/src/assets/openWeatherIcons/${
            capital?.weather?.[0]?.icon ?? "unknown"
        }.png`
    );
    const weatherBoardRef = useRef();
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
