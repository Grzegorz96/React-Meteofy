import { Text, Decal, useTexture } from "@react-three/drei";
import { useRef, useEffect } from "react";

export default function InfoBoard({ position }) {
    const texture = useTexture("/src/assets/openWeatherIcons/02d.png");
    const meshRef = useRef();

    useEffect(() => {
        meshRef.current.lookAt(0, 0, 0);
    }, []);

    return (
        <mesh position={position} ref={meshRef}>
            <boxGeometry args={[0.12, 0.08, 0.005]} />
            <meshStandardMaterial color={"#81832c"} transparent opacity={0.6} />
            <Decal
                rotation={[0, Math.PI, 0]}
                position={[-0.025, 0.01, 0]}
                scale={[0.07, 0.06, 0.01]}
                renderOrder={1}
            >
                <meshBasicMaterial
                    transparent
                    polygonOffset={true}
                    polygonOffsetFactor={-1}
                    map={texture}
                />
            </Decal>

            <Text
                color={"#f6f3ea"}
                fontSize={0.025}
                maxWidth={1}
                lineHeight={0.02}
                position={[0.03, 0.008, -0.003]}
                rotation={[0, Math.PI, 0]}
            >
                20C
            </Text>
            <Text
                color={"#f6f3ea"}
                fontSize={0.018}
                maxWidth={1}
                lineHeight={0.02}
                position={[0, -0.025, -0.003]}
                rotation={[0, Math.PI, 0]}
            >
                Warszawa
            </Text>
        </mesh>
    );
}
