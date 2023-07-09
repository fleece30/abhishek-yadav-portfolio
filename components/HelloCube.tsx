import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";

interface HelloCubeProps {}

const Mesh = () => {
  const textRef = useRef<any>();
  const boxRef = useRef<any>();
  let targetX = 0,
    targetY = 0;
  useFrame(
    (state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime))
  );

  useFrame(({ mouse }) => {
    targetX += (mouse.x - targetX) * 0.1;
    targetY += (mouse.y - targetY) * 0.1;
    boxRef.current!.lookAt(targetX, targetY, 1);
  });

  return (
    <mesh rotation={[0, -Math.PI / 4, -Math.PI / 4]} ref={boxRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"#dc9dcd"}>
        <RenderTexture attach={"map"} sourceFile>
          <PerspectiveCamera makeDefault position={[0, 0, 2]} />
          <color attach="background" args={["#dc9dcd"]} />
          <Text fontSize={1.5} color={"#555"} ref={textRef} font={"poppins"}>
            Hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

const HelloCube: React.FC<HelloCubeProps> = ({}) => {
  return (
    <div className="w-full md:w-1/2 h-screen">
      <Canvas>
        {/*<OrbitControls enableZoom={false} />*/}
        <ambientLight intensity={1} />
        <directionalLight position={[6, 2, 1]} />
        <Mesh />
      </Canvas>
    </div>
  );
};

export default HelloCube;
