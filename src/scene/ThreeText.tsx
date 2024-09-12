import { Text3D } from "@react-three/drei";
import { Overlay } from "./Overlay";
import useThreeClickable from "./useThreeClickable";

export function ThreeText() {
  const { hovered, active, props } = useThreeClickable();

  return (
    <group position={[1.4, 0, 0]} {...props}>
      <Text3D font="/opensans.json">
        three.js
        <meshPhongMaterial
          color={hovered ? "#ccc" : "#888"}
          specular={"#fff"}
        />
      </Text3D>
      {active && (
        <Overlay title="Three.js" href="https://threejs.org">
          three.js is great for 3D web graphics!
        </Overlay>
      )}
    </group>
  );
}
