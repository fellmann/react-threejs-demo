import { Text3D } from "@react-three/drei";
import { Overlay } from "./Overlay";
import useThreeClickable from "./useThreeClickable";

export function ReactText() {
  const { hovered, active, props } = useThreeClickable();

  return (
    <group position={[-5, 0, 0]} {...props}>
      <Text3D font="/opensans.json">
        React
        <meshPhongMaterial
          color={hovered ? "#ccc" : "#888"}
          specular={"#fff"}
        />
      </Text3D>
      {active && (
        <Overlay title="React" href="https://react.dev">
          React is a great frontend framework!
        </Overlay>
      )}
    </group>
  );
}
