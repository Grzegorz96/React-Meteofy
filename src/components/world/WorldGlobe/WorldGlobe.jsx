import { Suspense, useState } from "react";
import { CanvasContainer } from "./WorldGlobe.styles";
import { Canvas } from "@react-three/fiber";
import Earth from "../Earth";
import { Stars, OrbitControls } from "@react-three/drei";
import Loader from "../../ui/Loader/Loader";
import { darkTheme } from "../../../utils/styles/theme";

/**
 * @component
 * Component representing a canvas with whole scene.
 *
 * @param {Object} props - Component props.
 * @param {Array} props.fetchedCitiesData - Array of data for cities.
 * @returns {JSX.Element} JSX element representing the 3D globe with stars, lights and orbit controls.
 */
export default function WorldGlobe({ fetchedCitiesData }) {
    // State to manage loading state.
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {isLoading && <Loader color={darkTheme.textPrimary} />}
            <CanvasContainer>
                <Canvas>
                    <Suspense fallback={null}>
                        <ambientLight intensity={1} />
                        <directionalLight
                            position={[0, 0, 5]}
                            color={"#f6f3ea"}
                        />
                        <Stars
                            radius={300}
                            depth={60}
                            count={20000}
                            factor={10}
                            saturation={0}
                            fade={true}
                        />
                        <OrbitControls
                            maxDistance={8}
                            minDistance={3.5}
                            enableZoom={true}
                            enablePan={true}
                            enableRotate={true}
                            zoomSpeed={0.5}
                            rotateSpeed={0.2}
                            panSpeed={0.3}
                            target={[0, 0, 0]}
                        />
                        <Earth
                            fetchedCitiesData={fetchedCitiesData}
                            setIsLoading={setIsLoading}
                        />
                    </Suspense>
                </Canvas>
            </CanvasContainer>
        </>
    );
}
