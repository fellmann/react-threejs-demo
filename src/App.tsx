import { MantineContext, MantineThemeContext } from "@mantine/core";
import {
  Bounds,
  Circle,
  ContactShadows,
  OrbitControls,
  useContextBridge,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Heart } from "./scene/Heart";
import { Lights } from "./scene/Lights";
import { ReactText } from "./scene/ReactText";
import { ThreeText } from "./scene/ThreeText";
import { Cinema } from "./scene/Cinema";

export default function App() {
  const MantineBridgeProvider = useContextBridge(
    MantineThemeContext,
    MantineContext
  );
  return (
    <Canvas camera={{ position: [2, 5, 10] }} shadows>
      <MantineBridgeProvider>
        <Lights />
        <Bounds fit>
          <Heart />
          <ReactText />
          <ThreeText />
        </Bounds>
        <Cinema />
        <ContactShadows opacity={0.7} />
        <Circle
          receiveShadow
          args={[5, 40]}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -0.1, -0.1]}
        />
        <OrbitControls makeDefault />
      </MantineBridgeProvider>
    </Canvas>
  );
}
