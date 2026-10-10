import { useEffect, memo } from 'react';
import { useThree } from '@react-three/fiber';
import { useTexture, Sphere } from '@react-three/drei';
import { useTheme } from 'styled-components';
import WeatherBoard from './WeatherBoard';
import { closeWeatherModal } from '../ui/modals/WeatherModal/WeatherModal';
import EarthDayMap from '../../assets/textures/8k-earth-day-map.jpg';
import EarthCloudsMap from '../../assets/textures/8k-earth-clouds.jpg';
import NormalMap from '../../assets/textures/8k-earth-normal-map.jpg';
import SpecularMap from '../../assets/textures/8k-earth-specular-map.jpg';
import { worldCapitalsData } from '../../utils/citiesConfig/worldCapitalsData';
import { convertLatLonToCartesian } from '../../utils/formatters';

/**
 * @component
 * Component representing the Earth globe with weather boards for cities.
 *
 * @param {Object} props - Component props.
 * @param {Array} props.fetchedCitiesData - Array of data for cities.
 * @param {Function} props.setIsLoading - Function to set loading state.
 * @returns {JSX.Element} JSX element representing the Earth globe.
 */
function Earth({ fetchedCitiesData, setIsLoading }) {
  const theme = useTheme();
  const { camera, raycaster, pointer, scene } = useThree();

  // Load textures for Earth rendering.
  const [colorMap, cloudsMap, normalMap, specularMap] = useTexture([
    EarthDayMap,
    EarthCloudsMap,
    NormalMap,
    SpecularMap,
  ]);

  // Close weather modal when theme changes.
  useEffect(() => {
    return () => {
      closeWeatherModal();
    };
  }, [theme]);

  // Enable label layer and hide the globe loader once Earth is mounted.
  useEffect(() => {
    camera.layers.enable(1);
    setIsLoading(false);
  }, [camera.layers, setIsLoading]);

  // Shift overlapping capitals, then convert coordinates to a point on the globe.
  const toBoardPosition = (capital) => {
    const cityData = worldCapitalsData.find(
      (city) =>
        city.name === capital?.name &&
        city.coord.lat === capital?.coord?.lat &&
        city.coord.lon === capital?.coord?.lon
    );

    return convertLatLonToCartesian(
      (capital?.coord?.lat ?? 0) + (cityData?.boardOffset?.lat ?? 0),
      (capital?.coord?.lon ?? 0) + (cityData?.boardOffset?.lon ?? 0),
      3.01
    );
  };

  // True when this board is the closest hit under the pointer.
  function isFrontmostBoard(weatherBoardRef) {
    raycaster.setFromCamera(pointer, camera);
    const [hit] = raycaster.intersectObjects(scene.children, true);
    return hit?.object === weatherBoardRef.current;
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
        {fetchedCitiesData?.map((capital) => (
          <WeatherBoard
            key={`${capital?.name}-${capital?.coord?.lat}-${capital?.coord?.lon}`}
            position={toBoardPosition(capital)}
            capital={capital}
            isFrontmostBoard={isFrontmostBoard}
          />
        ))}
      </Sphere>
    </group>
  );
}

const MemoizedEarth = memo(Earth);
export default MemoizedEarth;
