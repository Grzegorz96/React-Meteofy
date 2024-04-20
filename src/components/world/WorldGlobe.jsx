import { Suspense } from "react";
import { CanvasContainer } from "./WorldGlobe.styles";
import { Canvas } from "@react-three/fiber";
import Earth from "./Earth";

export default function WorldGlobe() {
    return (
        <CanvasContainer>
            <Canvas>
                <Suspense fallback={null}>
                    <Earth />
                </Suspense>
            </Canvas>
        </CanvasContainer>
    );
}
