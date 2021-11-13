import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export const Box = ({ toggleCard, ...props}) => {
  const groupRef = useRef();
  const circleRef = useRef();
  const boxRef = useRef();
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    if (hovered === false) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group
			{...props}
      ref={groupRef}
      onPointerOver={() => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <mesh
        ref={boxRef}
        scale={2}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
      >
        <boxBufferGeometry />
        <meshStandardMaterial color={hovered ? "darkblue" : "lightblue"} />
      </mesh>
      <mesh
        ref={circleRef}
        scale={0.2}
        position={[2, 0, 0]}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
        onClick={() => toggleCard()}
      >
        <sphereBufferGeometry />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
    </group>
  );
};
