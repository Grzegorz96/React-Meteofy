import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { convertLatLongToCartesian } from "../../utils/formatting";

// import EarthDayMap from "../../assets/textures/8k-earth-daymap.jpg";
import EarthDayMap from "../../assets/textures/8k-map.jpg";
import EarthCloudsMap from "../../assets/textures/8k-earth-clouds.jpg";

import listOfCapitals from "../../utils/geoData/listOfCapitals.json";

export default function Earth() {
    const [colorMap, cloudsMap] = useLoader(TextureLoader, [
        EarthDayMap,
        EarthCloudsMap,
    ]);

    const earthRef = useRef();
    const cloudsRef = useRef();

    // useFrame(({ clock }) => {
    //     const elapsedTime = clock.getElapsedTime();
    //     earthRef.current.rotation.y = elapsedTime / 6;
    //     cloudsRef.current.rotation.y = elapsedTime / 6;
    // });

    return (
        <>
            <ambientLight intensity={2} />
            <directionalLight position={[0, 0, 5]} color={"#f6f3ea"} />
            <Stars
                radius={300}
                depth={60}
                count={20000}
                factor={10}
                saturation={0}
                fade={true}
            />
            <mesh ref={cloudsRef}>
                <sphereGeometry args={[3.005, 128, 128]} />
                <meshPhongMaterial
                    map={cloudsMap}
                    transparent={true}
                    opacity={0.4}
                    depthWrite={true}
                    side={THREE.DoubleSide}
                />
            </mesh>
            <mesh ref={earthRef}>
                <sphereGeometry args={[3, 128, 128]} />
                <meshStandardMaterial
                    map={colorMap}
                    metalness={0.2}
                    roughness={0.7}
                />
                {listOfCapitals.map((capital, index) => {
                    return (
                        <mesh
                            key={index}
                            position={convertLatLongToCartesian(
                                capital.coord.lat,
                                capital.coord.lon
                            )}
                        >
                            <sphereGeometry args={[0.015, 10, 10]} />
                            <meshBasicMaterial color={"red"} />
                        </mesh>
                    );
                })}

                <OrbitControls
                    maxDistance={6}
                    minDistance={3.5}
                    enableZoom={true}
                    enablePan={true}
                    enableRotate={true}
                    zoomSpeed={0.3}
                    rotateSpeed={0.2}
                    panSpeed={0.3}
                    target={[0, 0, 0]}
                />
            </mesh>
        </>
    );
}
