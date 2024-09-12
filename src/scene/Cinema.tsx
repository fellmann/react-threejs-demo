import { Box, Plane, useVideoTexture } from "@react-three/drei";

export function Cinema() {
  const texture = useVideoTexture("/video.mp4");

  return (
    <group
      position={[10, 1, -5]}
      rotation={[0, -0.5, 0]}
    >
      <Box args={[4.5, 3.5, 0.3]} position={[0, 0, -0.2]}>
        <meshStandardMaterial color="#eee" />
      </Box>
      <Plane args={[4, 3]}>
        <meshBasicMaterial map={texture} toneMapped />
      </Plane>
    </group>
  );
}
