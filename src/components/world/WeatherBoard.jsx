import { Text, Decal, useTexture, Box, useCursor } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useRef, useLayoutEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { openWeatherModal } from '../ui/modals/WeatherModal/WeatherModal';

/**
 * @component
 * WeatherBoard component displays weather information for a specific location.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.position - The position of the weather board.
 * @param {Object} props.capital - The capital object containing weather data.
 * @param {Function} props.isFrontmostBoard - Checks if this board is under the pointer.
 * @returns {JSX.Element} The WeatherBoard component.
 */
export default function WeatherBoard({ position, capital, isFrontmostBoard }) {
  const theme = useTheme();
  const { gl } = useThree();
  // Hover drives both tile highlight and pointer cursor.
  const [isHovered, setIsHovered] = useState(false);

  useCursor(isHovered, 'pointer', '', gl.domElement);

  // Load texture for weather icon.
  const texture = useTexture(
    `/assets/openMeteoIcons/${capital?.main?.icon ?? 'unknown'}.png`
  );

  // Reference for the weather board object.
  const weatherBoardRef = useRef();

  // Ensure the weather board always faces the camera.
  useLayoutEffect(() => {
    weatherBoardRef.current.lookAt(0, 0, 0);
  }, []);

  // Open the weather modal only for the frontmost board.
  // function handleBoardClick(evt) {
  //   evt.stopPropagation();
  //   if (!isFrontmostBoard(weatherBoardRef)) return;
  //   openWeatherModal(capital, theme);
  // }
  function handleBoardClick(evt) {
    evt.stopPropagation();
    setIsHovered(false); // czyść też po kliknięciu (modal przejmuje uwagę)
    if (!isFrontmostBoard(weatherBoardRef)) return;
    openWeatherModal(capital, theme);
  }

  // Highlight only the frontmost board, and not while the globe is being dragged.
  // function handleBoardHover(evt) {
  //   evt.stopPropagation();
  //   if (gl.domElement.matches(':active')) return;
  //   if (!isFrontmostBoard(weatherBoardRef)) return;
  //   setIsHovered(true);
  // }
  function handleBoardHover(evt) {
    evt.stopPropagation();
    if (evt.pointerType !== 'mouse') return; // dotyk nie ma hovera
    if (gl.domElement.matches(':active')) return;
    if (!isFrontmostBoard(weatherBoardRef)) return;
    setIsHovered(true);
  }

  // After a drag ends on the board, pointerover does not fire again — recover hover here.
  // function handleBoardPointerUp(evt) {
  //   evt.stopPropagation();
  //   if (!isFrontmostBoard(weatherBoardRef)) return;
  //   setIsHovered(true);
  // }
  function handleBoardPointerUp(evt) {
    evt.stopPropagation();
    if (evt.pointerType !== 'mouse') {
      setIsHovered(false); // po puszczeniu palca zdejmij podświetlenie
      return;
    }
    if (!isFrontmostBoard(weatherBoardRef)) return;
    setIsHovered(true);
  }

  // Clear hover when the pointer leaves the board.
  function handleBoardHoverOut(evt) {
    evt.stopPropagation();
    setIsHovered(false);
  }

  return (
    <Box
      ref={weatherBoardRef}
      onClick={handleBoardClick}
      onPointerOver={handleBoardHover}
      onPointerUp={handleBoardPointerUp}
      onPointerOut={handleBoardHoverOut}
      args={[0.12, 0.08, 0.005]}
      position={position}
      name={`weather-board-${capital?.name}`}
    >
      <meshStandardMaterial
        color={isHovered ? '#1dbb25' : '#81832c'}
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
        color={'#f6f3ea'}
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
        color={'#f6f3ea'}
        fontSize={0.018}
        maxWidth={1}
        lineHeight={0.02}
        position={[0, -0.025, -0.003]}
        rotation={[0, Math.PI, 0]}
      >
        {capital?.name ?? 'Error'}
      </Text>
    </Box>
  );
}
