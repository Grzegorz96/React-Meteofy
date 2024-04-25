import { convertLatLongToCartesian } from "../../utils/formatting";
import { worldCapitals } from "../../utils/constants/worldCapitalsData";

import InfoBoard from "./InfoBoard";
import { useGLTF, useTexture } from "@react-three/drei";
// import EarthDayMap from "../../assets/textures/8k-earth-daymap.jpg";
import EarthDayMap from "../../assets/textures/8k-map.jpg";
import EarthCloudsMap from "../../assets/textures/8k-earth-clouds.jpg";

export default function Earth({ fetchedCitiesData }) {
    const [colorMap, cloudsMap] = useTexture([EarthDayMap, EarthCloudsMap]);
    // const { scene } = useGLTF("/src/assets/3Dmodels/blankFlag/scene.gltf");

    // const earthRef = useRef();
    // const cloudsRef = useRef();

    // useFrame(({ clock }) => {
    //     const elapsedTime = clock.getElapsedTime();
    //     earthRef.current.rotation.y = elapsedTime / 6;
    //     cloudsRef.current.rotation.y = elapsedTime / 6;
    // });

    return (
        <group>
            <mesh>
                <sphereGeometry args={[3.005, 128, 128]} />
                <meshPhongMaterial
                    map={cloudsMap}
                    transparent={true}
                    opacity={0.4}
                    depthWrite={true}
                />
            </mesh>
            <mesh>
                <sphereGeometry args={[3, 128, 128]} />
                <meshStandardMaterial
                    map={colorMap}
                    metalness={0.2}
                    roughness={0.7}
                />
                {worldCapitals.map((capital) => (
                    <InfoBoard
                        key={capital.id}
                        position={convertLatLongToCartesian(
                            capital.coord.lat,
                            capital.coord.lon
                        )}
                    />
                ))}
            </mesh>
        </group>
    );
}
