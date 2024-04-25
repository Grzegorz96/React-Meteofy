import { Clone } from "@react-three/drei";
import * as THREE from "three";

export default function Marker({ scene, position }) {
    // Obliczamy wektor kierunku od środka do pozycji znacznika
    // const direction = new THREE.Vector3().copy(position).normalize();

    // // Obliczamy rotację, aby osiągnąć ten kierunek
    // const rotation = new THREE.Euler().setFromVector3(direction);

    return (
        <Clone
            object={scene}
            scale={0.05}
            position={position}
            // rotation={rotation}
        />
    );
}
