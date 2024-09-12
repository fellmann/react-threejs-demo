import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Mesh } from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { Overlay } from "./Overlay";
import useThreeClickable from "./useThreeClickable";

export function Heart() {
  const mesh = useLoader(STLLoader, "/heart.stl");
  const { hovered, active, props } = useThreeClickable();

  useEffect(() => {
    mesh.computeVertexNormals();
  }, [mesh]);

  const ref = useRef<Mesh>(null);

  useFrame((_, delta) => {
    ref.current?.rotateZ(delta);
  });

  return (
    <group>
      <mesh
        ref={ref}
        scale={[0.1, 0.1, 0.1]}
        rotation={[-Math.PI / 2, 0, 0]}
        {...props}
      >
        <primitive object={mesh} />
        <meshPhongMaterial color={hovered ? "#f88" : "red"} specular={"#f84"} />
      </mesh>
      {active && <Overlay title="Love">They work together perfectly!</Overlay>}
    </group>
  );
}
