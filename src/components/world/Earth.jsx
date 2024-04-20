import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

import EarthDayMap from "../../assets/textures/8k-earth-daymap.jpg";
// import EarthNightMap from "../../assets/textures/8k-earth-nightmap.jpg";
import EarthCloudsMap from "../../assets/textures/8k-earth-clouds.jpg";
import EarthSpecularMap from "../../assets/textures/8k-earth-specular-map.jpg";
import EarthNormalMap from "../../assets/textures/8k-earth-normal-map.jpg";

export default function Earth() {
    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
        TextureLoader,
        [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
    );

    const earthRef = useRef();
    const cloudsRef = useRef();

    // useFrame(({ clock }) => {
    //     const elapsedTime = clock.getElapsedTime();
    //     earthRef.current.rotation.y = elapsedTime / 6;
    //     cloudsRef.current.rotation.y = elapsedTime / 6;
    // });

    return (
        <>
            <ambientLight intensity={1} />
            <pointLight position={[4, 3, 2]} intensity={10} color={"#f6f3ea"} />
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
                    opacity={0.35}
                    depthWrite={true}
                    side={THREE.DoubleSide}
                />
            </mesh>
            <mesh ref={earthRef}>
                <sphereGeometry args={[3, 128, 128]} />
                <meshPhongMaterial specularMap={specularMap} />
                <meshStandardMaterial
                    map={colorMap}
                    normalMap={normalMap}
                    metalness={0.2}
                    roughness={0.7}
                />
                <OrbitControls
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
